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
        src: '/animations/hero.lottie',
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
          <linearGradient id="Gradient-0" x1="863" y1="0" x2="863" y2="542" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#835edf" stop-opacity="0" />
            <stop offset="1" stop-color="#540fc9" stop-opacity=".15" />
          </linearGradient>
        </defs>
        <path id="_a0" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width="2" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a1" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a2" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width=".5" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a3" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v556l-285.5-101l-344.1 17l-311.4-17l-323-70l-233 216l-229 43Z" stroke-width=".2" transform="translate(850,257) translate(-863,-271)" />
        <path id="_a4" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width="2" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a5" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a6" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width=".5" transform="translate(850,254) translate(-863,-271)" />
        <path id="_a7" fill="url(#Gradient-0)" fill-opacity=".3" stroke="rgba(186,126,255,0.20)" d="M0 0h1726v366l-285.5 98l-344.1 87l-311.4-87h-323l-233 128l-229-58Z" stroke-width=".2" transform="translate(850,254) translate(-863,-271)" />
        <ellipse id="_a8" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(216,575) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a9" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(449,447) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a10" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(772,447) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a11" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(1083.4,534) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a12" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(1427.6,447) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a13" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(216,587) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a14" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(449,371) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a15" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(772,441) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a16" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(1083.4,458) translate(0,0) scale(.2,.2) translate(0,0)" />
        <ellipse id="_a17" rx="6.8" ry="6.8" fill="#c59cff" transform="translate(1427.6,444.4) translate(0,0) scale(.2,.2) translate(0,0)" />
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
  </div>
</template>

<style scoped>
.animated-hero {
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px);
  padding-bottom: 48px;
}

/* Background SVG layer */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  pointer-events: none;
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
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-name-clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.hero-tagline-main {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.35;
  margin-bottom: 8px;
}

.hero-tagline-sub {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  margin-bottom: 32px;
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
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, background-color 0.25s;
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
}

/* Lottie container */
.hero-lottie {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
}

.lottie-canvas {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
}

@media (max-width: 639px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-tagline-main {
    font-size: 1.25rem;
  }

  .hero-tagline-sub {
    font-size: 1rem;
  }

  .hero-lottie {
    max-width: 320px;
  }
}

@media (min-width: 640px) and (max-width: 959px) {
  .hero-name {
    font-size: 2.5rem;
  }
}

@media (min-width: 960px) {
  .hero-name {
    font-size: 3rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero-bg svg {
    opacity: 0.5;
  }
}
</style>
