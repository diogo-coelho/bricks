<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="256"
      y1="96"
      x2="256"
      y2="56"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="456"
      x2="256"
      y2="416"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <path
      d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="416"
      y1="256"
      x2="456"
      y2="256"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="56"
      y1="256"
      x2="96"
      y2="256"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconLocateSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
