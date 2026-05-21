<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Rive artboard name. Options: Flywheel, Discover, Design, Deliver, Distill. */
    artboard?: string
    /** Rendered aspect ratio. Square works for the full Flywheel; vertical works for the four phase variants. */
    layout?: 'square' | 'vertical' | 'wide'
  }>(),
  { artboard: 'Flywheel', layout: 'square' },
)

const canvas = ref<HTMLCanvasElement | null>(null)
let rive: any = null

onMounted(async () => {
  if (typeof window === 'undefined' || !canvas.value) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  try {
    const rivePkg: any = await import('@rive-app/canvas')
    const Rive = rivePkg.Rive
    const Layout = rivePkg.Layout
    const Fit = rivePkg.Fit
    const Alignment = rivePkg.Alignment

    rive = new Rive({
      src: '/animations/flywheel.riv',
      canvas: canvas.value,
      autoplay: !prefersReducedMotion,
      stateMachines: 'State Machine 1',
      artboard: props.artboard,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
      onLoad: () => {
        rive?.resizeDrawingSurfaceToCanvas()
      },
    })
  } catch (e) {
    console.warn('Failed to load Rive flywheel:', e)
  }
})

onUnmounted(() => {
  if (rive) {
    rive.cleanup?.()
    rive = null
  }
})
</script>

<template>
  <figure class="flywheel-diagram" :class="`layout-${layout}`">
    <canvas ref="canvas" class="flywheel-canvas" aria-label="The spec-driven lifecycle: Discover, Design, Deliver, Distill, repeating as a chain"></canvas>
  </figure>
</template>

<style scoped>
.flywheel-diagram {
  margin: 2rem auto;
  max-width: 720px;
}

.layout-square {
  aspect-ratio: 1 / 1;
}

.layout-vertical {
  aspect-ratio: 1 / 1.6;
  max-width: 360px;
}

.layout-wide {
  aspect-ratio: 16 / 9;
  max-width: 960px;
}

.flywheel-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
