<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polyline
      points="352 368 464 368 464 256"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <polyline
      points="48 144 192 288 288 192 448 352"
      style="
        fill: none;
        stroke-linecap: square;
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
  name: 'BrIconTrendingDownSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
