<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect x="16" y="120" width="480" height="48" :style="{ fill: color }" />
    <rect x="96" y="232" width="320" height="48" :style="{ fill: color }" />
    <rect x="192" y="344" width="128" height="48" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFilterSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
