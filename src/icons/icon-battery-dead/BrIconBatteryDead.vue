<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="31"
      y="144"
      width="400"
      height="224"
      rx="45.7"
      ry="45.7"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="479"
      y1="218.67"
      x2="479"
      y2="293.33"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconBatteryDead',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
