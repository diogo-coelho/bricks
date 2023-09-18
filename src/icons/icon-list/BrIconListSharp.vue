<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="144"
      y1="144"
      x2="464"
      y2="144"
      style="fill: none; stroke-linejoin: round; stroke-width: 48px"
      :style="{ stroke: color }"
    />
    <line
      x1="144"
      y1="256"
      x2="464"
      y2="256"
      style="fill: none; stroke-linejoin: round; stroke-width: 48px"
      :style="{ stroke: color }"
    />
    <line
      x1="144"
      y1="368"
      x2="464"
      y2="368"
      style="fill: none; stroke-linejoin: round; stroke-width: 48px"
      :style="{ stroke: color }"
    />
    <rect
      x="64"
      y="128"
      width="32"
      height="32"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="64"
      y="240"
      width="32"
      height="32"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="64"
      y="352"
      width="32"
      height="32"
      style="
        fill: none;
        stroke-linecap: square;
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
  name: 'BrIconListSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
