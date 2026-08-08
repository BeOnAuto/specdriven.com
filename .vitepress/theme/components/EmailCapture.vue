<script setup lang="ts">
import { ref } from 'vue';
import posthog from 'posthog-js';

const SOURCE = 'specdriven.com';
const PLACEMENT = 'footer';
const ENDPOINT = (import.meta.env.VITE_FORMS_API_URL as string | undefined)
  ?? 'https://forms.on.auto/subscribe';

const email = ref('');
const state = ref<'idle' | 'submitting' | 'done' | 'error'>('idle');
const errorMessage = ref('');

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
  <section id="subscribe" class="sd-subscribe">
    <div class="sd-subscribe-inner">
      <div class="sd-subscribe-copy">
        <h2>Keep the important decisions visible.</h2>
        <p>Get new patterns, approaches, and tools when they’re written down. Low-volume, no fluff.</p>
      </div>
      <form v-if="state !== 'done'" class="sd-subscribe-form" @submit.prevent="submit">
        <label class="sd-subscribe-label" for="sd-subscribe-input">Email</label>
        <input
          id="sd-subscribe-input"
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
        <p v-if="errorMessage" class="sd-subscribe-error">{{ errorMessage }}</p>
        <p class="sd-subscribe-privacy">By subscribing, you agree to the <a href="/privacy">privacy note</a>.</p>
      </form>
      <p v-else class="sd-subscribe-success">
        You’re in. We’ll only write when there’s something worth your time.
      </p>
    </div>
  </section>
</template>

<style scoped>
.sd-subscribe {
  position: relative;
  padding: 64px 24px;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
}

.sd-subscribe::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: var(--sd-gradient-brand);
  opacity: 0.6;
}

.sd-subscribe-inner {
  max-width: 880px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: center;
}

@media (max-width: 720px) {
  .sd-subscribe-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.sd-subscribe-copy h2 {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.sd-subscribe-copy p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.sd-subscribe-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
}

.sd-subscribe-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sd-subscribe-form input {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  font-family: inherit;
  transition: border-color 0.15s ease;
}

.sd-subscribe-form input:focus {
  outline: none;
  border-color: var(--sd-orange);
}

.sd-subscribe-form button {
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

.sd-subscribe-form button:hover:not(:disabled) {
  background: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-border);
}

.sd-subscribe-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sd-subscribe-error {
  grid-column: 1 / -1;
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--sd-red);
}

.sd-subscribe-privacy {
  grid-column: 1 / -1;
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.sd-subscribe-success {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-1);
  padding: 12px 14px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
}
</style>
