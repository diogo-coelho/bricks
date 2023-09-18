<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="48"
      y="64"
      width="416"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <polyline
      points="320 304 256 368 192 304"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="345.89"
      x2="256"
      y2="224"
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
  name: 'BrIconArchiveOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
