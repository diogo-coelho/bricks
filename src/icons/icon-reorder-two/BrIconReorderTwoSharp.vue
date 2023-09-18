<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="118"
      y1="304"
      x2="394"
      y2="304"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="118"
      y1="208"
      x2="394"
      y2="208"
      style="
        fill: none;
        stroke-linecap: square;
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
  name: 'BrIconReorderTwoSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
