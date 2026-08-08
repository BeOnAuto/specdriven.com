<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import posthog from 'posthog-js';

const SOURCE = 'specdriven.com';
const PLACEMENT = 'modal';
const ENDPOINT = (import.meta.env.VITE_FORMS_API_URL as string | undefined)
  ?? 'https://forms.on.auto/subscribe';

const open = ref(false);
const email = ref('');
const state = ref<'idle' | 'submitting' | 'done' | 'error'>('idle');
const errorMessage = ref('');
const inputEl = ref<HTMLInputElement | null>(null);

function close() {
  open.value = false;
  setTimeout(() => {
    email.value = '';
    state.value = 'idle';
    errorMessage.value = '';
  }, 200);
}

async function show() {
  open.value = true;
  await nextTick();
  inputEl.value?.focus();
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) close();
}

onMounted(() => {
  window.addEventListener('open-subscribe-modal', show);
  window.addEventListener('keydown', onKey);
});

onBeforeUnmount(() => {
  window.removeEventListener('open-subscribe-modal', show);
  window.removeEventListener('keydown', onKey);
});

async function submit() {
  if (state.value === 'submitting') return;
  state.value = 'submitting';
  errorMessage.value = '';

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value.trim(),
        source: SOURCE,
        placement: PLACEMENT,
        referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      errorMessage.value = body?.error === 'invalid email'
        ? 'That email doesn’t look right. Try again?'
        : 'Something went wrong. Try again in a moment.';
      state.value = 'error';
      return;
    }

    posthog.identify(email.value.trim().toLowerCase(), { source: SOURCE });
    posthog.capture('newsletter_signup', { source: SOURCE, placement: PLACEMENT });
    state.value = 'done';
  } catch {
    errorMessage.value = 'Network error. Try again in a moment.';
    state.value = 'error';
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="sd-modal">
      <div
        v-if="open"
        class="sd-modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sd-modal-title"
        @click.self="close"
      >
        <div class="sd-modal-card">
          <button class="sd-modal-close" aria-label="Close" @click="close">×</button>
          <div class="sd-modal-stripe" aria-hidden="true"></div>
          <h2 id="sd-modal-title">Keep the important decisions visible.</h2>
          <p class="sd-modal-sub">Get new patterns, approaches, and tools when they’re written down. Low-volume, no fluff.</p>
          <form v-if="state !== 'done'" class="sd-modal-form" @submit.prevent="submit">
            <label class="sd-sr-only" for="sd-modal-input">Email</label>
            <input
              id="sd-modal-input"
              ref="inputEl"
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="you@example.com"
              :disabled="state === 'submitting'"
            />
            <button type="submit" :disabled="state === 'submitting'">
              {{ state === 'submitting' ? 'Subscribing…' : 'Subscribe' }}
            </button>
            <p v-if="errorMessage" class="sd-modal-error">{{ errorMessage }}</p>
            <p class="sd-modal-privacy">By subscribing, you agree to the <a href="/privacy">privacy note</a>.</p>
          </form>
          <p v-else class="sd-modal-success">
            You’re in. We’ll only write when there’s something worth your time.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sd-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(8, 8, 10, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.sd-modal-card {
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 36px 32px 32px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.sd-modal-stripe {
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: var(--sd-gradient-brand);
  opacity: 0.7;
}

.sd-modal-close {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  transition: color 0.15s ease, background 0.15s ease;
}

.sd-modal-close:hover {
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.05);
}

.sd-modal-card h2 {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.sd-modal-sub {
  margin: 0 0 20px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.sd-modal-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
}

.sd-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sd-modal-form input {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  font-family: inherit;
  transition: border-color 0.15s ease;
}

.sd-modal-form input:focus {
  outline: none;
  border-color: var(--sd-orange);
}

.sd-modal-form button {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.sd-modal-form button:hover:not(:disabled) {
  background: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-border);
}

.sd-modal-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sd-modal-error {
  grid-column: 1 / -1;
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--sd-red);
}

.sd-modal-privacy {
  grid-column: 1 / -1;
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.sd-modal-success {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-1);
  padding: 12px 14px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
}

.sd-modal-enter-active,
.sd-modal-leave-active {
  transition: opacity 0.18s ease;
}
.sd-modal-enter-active .sd-modal-card,
.sd-modal-leave-active .sd-modal-card {
  transition: transform 0.22s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.18s ease;
}

.sd-modal-enter-from,
.sd-modal-leave-to {
  opacity: 0;
}
.sd-modal-enter-from .sd-modal-card,
.sd-modal-leave-to .sd-modal-card {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
