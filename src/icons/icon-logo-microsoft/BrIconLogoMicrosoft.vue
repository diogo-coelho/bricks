<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M31.87,30.58H244.7V243.39H31.87Z" :style="{ fill: color }" />
    <path d="M266.89,30.58H479.7V243.39H266.89Z" :style="{ fill: color }" />
    <path d="M31.87,265.61H244.7v212.8H31.87Z" :style="{ fill: color }" />
    <path d="M266.89,265.61H479.7v212.8H266.89Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconLogoMicrosoft',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
