<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M480,265H232V444l248,36V265Z" :style="{ fill: color }" />
    <path d="M216,265H32V415l184,26.7V265Z" :style="{ fill: color }" />
    <path d="M480,32,232,67.4V249H480V32Z" :style="{ fill: color }" />
    <path d="M216,69.7,32,96V249H216V69.7Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconLogoWindows',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
