<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="256"
      cy="256"
      r="26"
      style="stroke-miterlimit: 10; stroke-width: 10px"
      :style="{ fill: color }"
    />
    <circle
      cx="346"
      cy="256"
      r="26"
      style="stroke-miterlimit: 10; stroke-width: 10px"
      :style="{ fill: color }"
    />
    <circle
      cx="166"
      cy="256"
      r="26"
      style="stroke-miterlimit: 10; stroke-width: 10px"
      :style="{ fill: color }"
    />
    <polyline
      points="160 368 32 256 160 144"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 42px;
      "
      :style="{ stroke: color }"
    />
    <polyline
      points="352 368 480 256 352 144"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 42px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCodeWorking',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
