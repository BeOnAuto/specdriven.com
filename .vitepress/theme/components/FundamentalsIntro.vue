<template>
  <section class="fundamentals-intro" aria-labelledby="fundamentals-heading">
    <div class="fundamentals-inner">
      <h2 id="fundamentals-heading" class="fundamentals-heading">Start with the fundamentals</h2>
      <p class="fundamentals-lead">
        Whether you are evaluating spec-driven development for your team, looking for tools, or
        trying to understand the movement, these are the best places to begin.
      </p>
    </div>
  </section>
</template>

<style scoped>
.fundamentals-intro {
  max-width: 1152px;
  margin: 24px auto 40px;
  padding: 0 24px;
}

.fundamentals-inner {
  max-width: 760px;
}

.fundamentals-heading {
  font-family: 'Barlow', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  position: relative;
  padding-top: 8px;
}

.fundamentals-heading::after {
  content: '';
  display: block;
  width: 48px;
  height: 3px;
  background: var(--sd-gradient-brand);
  margin-top: 12px;
  border-radius: 2px;
}

.fundamentals-lead {
  font-family: 'Barlow', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 640px;
}
</style>
