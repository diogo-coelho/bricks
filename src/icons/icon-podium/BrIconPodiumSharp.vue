<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect x="160" y="32" width="192" height="448" :style="{ fill: color }" />
    <rect x="384" y="192" width="112" height="288" :style="{ fill: color }" />
    <rect x="16" y="128" width="112" height="352" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconPodiumSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
