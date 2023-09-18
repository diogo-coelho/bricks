<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="48"
      y="96"
      width="416"
      height="320"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="384"
      y="336"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="384"
      y="256"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="384"
      y="176"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="384"
      y="96"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="48"
      y="336"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="48"
      y="256"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="48"
      y="176"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="48"
      y="96"
      width="80"
      height="80"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="128"
      y="96"
      width="256"
      height="160"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="128"
      y="256"
      width="256"
      height="160"
      rx="28"
      ry="28"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFilmOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
