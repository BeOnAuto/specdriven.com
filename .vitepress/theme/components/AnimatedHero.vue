<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const lottieContainer = ref<HTMLCanvasElement | null>(null)
let dotLottieInstance: any = null

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
  })
}

function initKeyshapeAnimations() {
  const ks = (window as any).KeyshapeJS
  if (!ks) return

  ks.animate(
    '#_a0', [{p:'d',t:[0,2900,7700,10000],v:["path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')","path('M0,0L1726,0L1726,332L1440.5,473L1096.4,526L785,385L462,563L229,639L0,512Z')","path('M0,0L1726,0L1726,493L1440.5,562L1096.4,336L785,442L462,493L229,403L0,567Z')","path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a1', [{p:'d',t:[700,3600,8400,10700],v:["path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')","path('M0,0L1726,0L1726,332L1440.5,473L1096.4,526L785,385L462,563L229,639L0,512Z')","path('M0,0L1726,0L1726,493L1440.5,562L1096.4,336L785,442L462,493L229,403L0,567Z')","path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a2', [{p:'d',t:[1400,4300,9100,11400],v:["path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')","path('M0,0L1726,0L1726,332L1440.5,473L1096.4,526L785,385L462,563L229,639L0,512Z')","path('M0,0L1726,0L1726,493L1440.5,562L1096.4,336L785,442L462,493L229,403L0,567Z')","path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a3', [{p:'d',t:[2100,5000,9800,12100],v:["path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')","path('M0,0L1726,0L1726,332L1440.5,473L1096.4,526L785,385L462,563L229,639L0,512Z')","path('M0,0L1726,0L1726,493L1440.5,562L1096.4,336L785,442L462,493L229,403L0,567Z')","path('M0,0L1726,0L1726,556L1440.5,455L1096.4,472L785,455L462,385L229,601L0,644Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a4', [{p:'d',t:[400,5200,10400],v:["path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')","path('M0,0L1726,0L1726,640L1440.5,411L1096.4,367L785,442L462,463L229,341L0,412Z')","path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a5', [{p:'d',t:[1000,5800,11000],v:["path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')","path('M0,0L1726,0L1726,640L1440.5,411L1096.4,367L785,442L462,463L229,341L0,412Z')","path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a6', [{p:'d',t:[1700,6500,11700],v:["path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')","path('M0,0L1726,0L1726,640L1440.5,411L1096.4,367L785,442L462,463L229,341L0,412Z')","path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a7', [{p:'d',t:[2500,7300,12500],v:["path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')","path('M0,0L1726,0L1726,640L1440.5,411L1096.4,367L785,442L462,463L229,341L0,412Z')","path('M0,0L1726,0L1726,366L1440.5,464L1096.4,551L785,464L462,464L229,592L0,534Z')"],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity}],
    '#_a8', [{p:'mpath',t:[400,5200,10400],v:['0%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M216,575L216,324L216,575'}],
    '#_a9', [{p:'mpath',t:[400,5200,10400],v:['0%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M449,447L449,446L449,447'}],
    '#_a10', [{p:'mpath',t:[400,5200,10400],v:['0%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M772,447L772,425L772,447'}],
    '#_a11', [{p:'mpath',t:[400,5200,10400],v:['0%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M1083.4,534L1083.4,350L1083.4,534'}],
    '#_a12', [{p:'mpath',t:[400,5200,10400],v:['0%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M1427.5,447L1427.5,393.2L1427.5,447'}],
    '#_a13', [{p:'mpath',t:[0,2900,7700,10000],v:['0%','8.2%','58.2%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M216,587L216,625L216,393.2L216,587'}],
    '#_a14', [{p:'mpath',t:[0,2900,7700,10000],v:['0%','50%','69.1%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M449,371L449,549L449,481.1L449,371'}],
    '#_a15', [{p:'mpath',t:[0,2900,7700,10000],v:['0%','50%','90.7%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M772,441L772,371L772,428L772,441'}],
    '#_a16', [{p:'mpath',t:[0,2900,7700,10000],v:['0%','14.7%','64.7%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M1083.4,458L1083.4,512L1083.4,328.8L1083.4,458'}],
    '#_a17', [{p:'mpath',t:[0,2900,7700,10000],v:['0%','7.1%','50%','100%'],e:[[1,.4,0,.6,1],[1,.4,0,.6,1],[1,.4,0,.6,1],[0]],iterations:Infinity,mp:'M1427.5,444.4L1427.5,459L1427.5,548L1427.5,444.4'}],
    {autoremove: false}
  ).range(0, Infinity).loop(true)
}

onMounted(async () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Init KeyshapeJS background animation
  if (!prefersReducedMotion) {
    try {
      await loadScript('/js/keyshape.min.js')
      initKeyshapeAnimations()
    } catch (e) {
      console.warn('Failed to load KeyshapeJS:', e)
    }
  }

  // Init Lottie animation
  if (lottieContainer.value && !prefersReducedMotion) {
    try {
      const { DotLottie } = await import('@lottiefiles/dotlottie-web')
      dotLottieInstance = new DotLottie({
        canvas: lottieContainer.value,
        src: '/animations/design-to-specs.json',
        loop: true,
        autoplay: true,
      })
    } catch (e) {
      console.warn('Failed to load Lottie:', e)
    }
  }
})

onUnmounted(() => {
  if (dotLottieInstance) {
    dotLottieInstance.destroy()
    dotLottieInstance = null
  }
})
</script>

<template>
  <div class="animated-hero">
    <!-- Background SVG mesh animation -->
    <div class="hero-bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 322 1700 478" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="Gradient-0" x1="0" y1="0" x2="1726" y2="542" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ec3f4a" stop-opacity="0" />
            <stop offset="0.33" stop-color="#ff8a1d" stop-opacity=".12" />
            <stop offset="0.66" stop-color="#5ec72d" stop-opacity=".08" />
            <stop offset="1" stop-color="#42c3f7" stop-opacity=".04" />
          </linearGradient>
          <linearGradient id="Gradient-stroke" x1="0" y1="0" x2="1726" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ec3f4a" stop-opacity=".2" />
            <stop offset="0.33" stop-color="#ff8a1d" stop-opacity=".15" />
            <stop offset="0.66" stop-color="#5ec72d" stop-opacity=".12" />
            <stop offset="1" stop-color="#42c3f7" stop-opacity=".1" />
          </linearGradient>
        </defs>
        <path id="_a0" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width="2" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a1" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a2" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width=".5" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a3" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width=".2" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a4" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width="2" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a5" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a6" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width=".5" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a7" fill="url(#Gradient-0)" fill-opacity=".3" stroke="url(#Gradient-stroke)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width=".2" transform="translate(850,254) translate(-863,-271)" />
        <!-- Node dots with brand colors -->
        <ellipse id="_a8" rx="6.8" ry="6.8" fill="#ec3f4a" transform="translate(216,575) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a9" rx="6.8" ry="6.8" fill="#ff8a1d" transform="translate(449,447) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a10" rx="6.8" ry="6.8" fill="#5ec72d" transform="translate(772,447) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a11" rx="6.8" ry="6.8" fill="#42c3f7" transform="translate(1083.4,534) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a12" rx="6.8" ry="6.8" fill="#ff8a1d" transform="translate(1427.6,447) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a13" rx="6.8" ry="6.8" fill="#42c3f7" transform="translate(216,587) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a14" rx="6.8" ry="6.8" fill="#5ec72d" transform="translate(449,371) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a15" rx="6.8" ry="6.8" fill="#ec3f4a" transform="translate(772,441) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a16" rx="6.8" ry="6.8" fill="#ff8a1d" transform="translate(1083.4,458) translate(0,0) scale(.25,.25) translate(0,0)" />
        <ellipse id="_a17" rx="6.8" ry="6.8" fill="#5ec72d" transform="translate(1427.6,444.4) translate(0,0) scale(.25,.25) translate(0,0)" />
      </svg>
    </div>

    <!-- Content grid -->
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-name">
          <span class="hero-name-clip">Spec-Driven</span>
        </h1>
        <p class="hero-tagline-main">Specifications are the new programming languages.</p>
        <p class="hero-tagline-sub">You're already specifying. Start doing it well.</p>
        <div class="hero-actions">
          <a class="hero-action brand" href="/manifesto">Read the Manifesto</a>
          <a class="hero-action alt" href="/see-it">See It In Action</a>
        </div>
      </div>
      <div class="hero-lottie">
        <canvas ref="lottieContainer" class="lottie-canvas" />
      </div>
    </div>

    <!-- Brand stripe accent -->
    <div class="hero-stripe" aria-hidden="true">
      <span class="stripe stripe-red"></span>
      <span class="stripe stripe-orange"></span>
      <span class="stripe stripe-green"></span>
      <span class="stripe stripe-blue"></span>
    </div>
  </div>
</template>

<style scoped>
.animated-hero {
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 8px);
  padding-bottom: 48px;
  margin-bottom: 48px;
}

/* Background SVG layer — sits behind all content */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.hero-bg svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Content layer */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

@media (min-width: 960px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 48px;
  }
}

/* Hero text */
.hero-text {
  flex: 1;
}

.hero-name {
  font-family: 'Barlow', sans-serif;
  font-size: 4.6rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.hero-name-clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.hero-tagline-main {
  font-family: 'Barlow', sans-serif;
  font-size: 1.85rem;
  font-weight: 400;
  color: var(--vp-c-text-1);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.hero-tagline-sub {
  font-family: 'Barlow', sans-serif;
  font-size: 1.85rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-style: italic;
  margin-bottom: 36px;
}

/* CTA buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

@media (min-width: 960px) {
  .hero-actions {
    justify-content: flex-start;
  }
}

.hero-action {
  display: inline-block;
  font-family: 'Barlow', sans-serif;
  border-radius: 8px;
  padding: 0 28px;
  min-height: 3rem;
  line-height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  letter-spacing: -0.01em;
}

.hero-action.brand {
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.hero-action.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(255, 138, 29, 0.15);
}

.hero-action.alt {
  border: 1px solid var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.hero-action.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
  transform: translateY(-1px);
}

/* Lottie container */
.hero-lottie {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
}

.lottie-canvas {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1;
}

/* Brand stripe decoration */
.hero-stripe {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  display: flex;
  gap: 0;
}

.stripe {
  flex: 1;
  display: block;
}

.stripe-red { background: #ec3f4a; }
.stripe-orange { background: #ff8a1d; }
.stripe-green { background: #5ec72d; }
.stripe-blue { background: #42c3f7; }

/* Responsive */
@media (max-width: 639px) {
  .hero-name {
    font-size: 2.8rem;
  }

  .hero-tagline-main {
    font-size: 1.3rem;
  }

  .hero-tagline-sub {
    font-size: 1.3rem;
  }

  .hero-lottie {
    max-width: 320px;
  }
}

@media (min-width: 640px) and (max-width: 959px) {
  .hero-name {
    font-size: 3.6rem;
  }
}

@media (min-width: 960px) {
  .hero-name {
    font-size: 4.6rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-bg svg {
    opacity: 0.5;
  }
}
</style>
