<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="80"
      y="80"
      width="352"
      height="352"
      rx="48"
      ry="48"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="144"
      y="144"
      width="224"
      height="224"
      rx="16"
      ry="16"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="80"
      x2="256"
      y2="48"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="336"
      y1="80"
      x2="336"
      y2="48"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="176"
      y1="80"
      x2="176"
      y2="48"
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
      y1="464"
      x2="256"
      y2="432"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="336"
      y1="464"
      x2="336"
      y2="432"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="176"
      y1="464"
      x2="176"
      y2="432"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="432"
      y1="256"
      x2="464"
      y2="256"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="432"
      y1="336"
      x2="464"
      y2="336"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="432"
      y1="176"
      x2="464"
      y2="176"
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
      y1="256"
      x2="80"
      y2="256"
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
      y1="336"
      x2="80"
      y2="336"
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
      y1="176"
      x2="80"
      y2="176"
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
  name: 'BrIconHardwareChipOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
