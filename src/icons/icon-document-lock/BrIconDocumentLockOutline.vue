<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M288,304V286c0-16.63-14.26-30-32-30s-32,13.37-32,30v18"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <path
      d="M304,416H208a32,32,0,0,1-32-32V336a32,32,0,0,1,32-32h96a32,32,0,0,1,32,32v48A32,32,0,0,1,304,416Z"
      :style="{ fill: color }"
    />
    <path
      d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z"
      fill="none"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <path
      d="M256,50.88V176a32,32,0,0,0,32,32H413.12"
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
  name: 'BrIconDocumentLockOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
