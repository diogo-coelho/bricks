<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M332.69,320a115,115,0,0,0-152.8,0"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 42px;
      "
      :style="{ stroke: color }"
    />
    <path
      d="M393.74,259a201.26,201.26,0,0,0-274.92,0"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 42px;
      "
      :style="{ stroke: color }"
    />
    <path
      d="M448,191.52a288,288,0,0,0-383.44,0"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 42px;
      "
      :style="{ stroke: color }"
    />
    <path
      d="M300.67,384,256,433l-44.34-49a56.73,56.73,0,0,1,88.92,0Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconWifiSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
