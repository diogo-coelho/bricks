<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M385,224a64,64,0,0,0-55.33,31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64,64,0,1,0-64.31.18V360.61a64,64,0,1,0,64,0V266.15c44.76,34,107.28,52.38,168.56,53.76A64,64,0,1,0,385,224ZM129,64A32,32,0,1,1,97,96,32,32,0,0,1,129,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,129,448ZM385,320a32,32,0,1,1,32-32A32,32,0,0,1,385,320Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconGitMerge',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
