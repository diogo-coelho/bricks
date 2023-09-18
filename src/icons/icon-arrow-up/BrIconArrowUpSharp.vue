<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polyline
      points="112 244 256 100 400 244"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="120"
      x2="256"
      y2="412"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconArrowUpSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
