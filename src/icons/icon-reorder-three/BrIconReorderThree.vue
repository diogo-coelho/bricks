<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="102"
      y1="256"
      x2="410"
      y2="256"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="102"
      y1="176"
      x2="410"
      y2="176"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="102"
      y1="336"
      x2="410"
      y2="336"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconReorderThree',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
