<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="112"
      y="48"
      width="288"
      height="416"
      rx="32"
      ry="32"
      style="
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="160.01"
      y="112"
      width="191.99"
      height="64"
      style="
        fill: none;
        stroke: #000;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <circle cx="168" cy="248" r="24" :style="{ fill: color }" />
    <circle cx="256" cy="248" r="24" :style="{ fill: color }" />
    <circle cx="344" cy="248" r="24" :style="{ fill: color }" />
    <circle cx="168" cy="328" r="24" :style="{ fill: color }" />
    <circle cx="256" cy="328" r="24" :style="{ fill: color }" />
    <circle cx="168" cy="408" r="24" :style="{ fill: color }" />
    <circle cx="256" cy="408" r="24" :style="{ fill: color }" />
    <rect
      x="320"
      y="304"
      width="48"
      height="128"
      rx="24"
      ry="24"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCalculatorOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
