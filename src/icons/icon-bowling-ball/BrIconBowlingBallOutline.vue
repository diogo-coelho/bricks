<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <circle cx="288" cy="200" r="24" :style="{ fill: color }" />
    <circle cx="296" cy="128" r="24" :style="{ fill: color }" />
    <circle cx="360" cy="168" r="24" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconBowlingBallOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
