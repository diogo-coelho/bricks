<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polygon
      points="157.65 176.1 64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1"
	  :style="{fill:color}"
    />
    <path
      d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
	  :style="{stroke:color}"
    />
    <path
      d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112"
      style="
        fill: none;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
	  :style="{stroke:color}"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconVolumeMediumSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  }
})
</script>
