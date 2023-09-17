<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="32"
      y="96"
      width="448"
      height="272"
      rx="32.14"
      ry="32.14"
      style="
        fill: none;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
	   :style="{stroke:color}"
    />
    <line
      x1="128"
      y1="416"
      x2="384"
      y2="416"
      style="
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
	   :style="{stroke:color}"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconTvOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  }
})
</script>
