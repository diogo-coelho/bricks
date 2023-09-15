<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect x="128" y="64" width="256" height="32" :style="{ fill: color }" />
    <rect x="96" y="112" width="320" height="32" :style="{ fill: color }" />
    <path d="M464,448H48V160H464Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconAlbumsSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
