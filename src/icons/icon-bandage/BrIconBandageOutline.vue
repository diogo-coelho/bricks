<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="-24.43"
      y="167.88"
      width="560.87"
      height="176.25"
      rx="88.12"
      ry="88.12"
      transform="translate(-106.04 256) rotate(-45)"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="169.41"
      y="156.59"
      width="176"
      height="196"
      rx="32"
      ry="32"
      transform="translate(255.41 -107.45) rotate(45)"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <circle cx="256" cy="208" r="16" :style="{ fill: color }" />
    <circle cx="304" cy="256" r="16" :style="{ fill: color }" />
    <circle cx="208" cy="256" r="16" :style="{ fill: color }" />
    <circle cx="256" cy="304" r="16" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconBandageOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
