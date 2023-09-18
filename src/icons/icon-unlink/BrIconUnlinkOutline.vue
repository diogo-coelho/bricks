<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M208,352H144a96,96,0,0,1,0-192h64"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="36"
      :style="{ stroke: color }"
    />
    <path
      d="M304,160h64a96,96,0,0,1,0,192H304"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="36"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconUnlinkOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
