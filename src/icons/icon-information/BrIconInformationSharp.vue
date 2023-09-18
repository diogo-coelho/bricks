<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polyline
      points="196 220 260 220 260 392"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 40px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="187"
      y1="396"
      x2="325"
      y2="396"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 40px;
      "
      :style="{ stroke: color }"
    />
    <path
      d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconInformationSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
