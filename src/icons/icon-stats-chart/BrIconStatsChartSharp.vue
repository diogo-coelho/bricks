<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M128,496H48V304h80Z" :style="{ fill: color }" />
    <path d="M352,496H272V208h80Z" :style="{ fill: color }" />
    <path d="M464,496H384V96h80Z" :style="{ fill: color }" />
    <path d="M240,496H160V16h80Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconStatsChartSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
