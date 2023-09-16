<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="216"
      cy="296"
      r="152"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <polyline
      points="448 160 448 64 352 64"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <line
      x1="324"
      y1="188"
      x2="448"
      y2="64"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconMaleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
