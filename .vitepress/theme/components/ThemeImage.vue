<script setup lang="ts">
import { useData } from 'vitepress'

const { isDark } = useData()

defineProps<{
  dark: string
  light: string
  alt?: string
}>()
</script>

<template>
  <img
    :src="isDark ? dark : light"
    :alt="alt ?? ''"
    style="border-radius: 8px; border: 1px solid var(--vp-c-divider);"
  />
</template>
