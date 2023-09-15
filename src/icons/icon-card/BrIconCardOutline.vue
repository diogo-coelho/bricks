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
      rx="56"
      ry="56"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="48"
      y1="192"
      x2="464"
      y2="192"
      style="fill: none; stroke-linejoin: round; stroke-width: 60px"
      :style="{ stroke: color }"
    />
    <rect
      x="128"
      y="300"
      width="48"
      height="20"
      style="fill: none; stroke-linejoin: round; stroke-width: 60px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCardOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
