<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polyline
      points="48 320 112 320 176 64 240 448 304 224 336 320 400 320"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <circle
      cx="432"
      cy="320"
      r="32"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconPulseOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
