<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M229.73,45.88,37.53,327.79a31.79,31.79,0,0,0,11.31,46L241,476.26a31.77,31.77,0,0,0,29.92,0l192.2-102.51a31.79,31.79,0,0,0,11.31-46L282.27,45.88A31.8,31.8,0,0,0,229.73,45.88Z"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="32"
      x2="256"
      y2="480"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconPrismOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
