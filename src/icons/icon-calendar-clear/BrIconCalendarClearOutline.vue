<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <rect
      fill="none"
      stroke-linejoin="round"
      stroke-width="32"
      x="48"
      y="80"
      width="416"
      height="384"
      rx="48"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-linejoin="round"
      stroke-width="32"
      stroke-linecap="round"
      x1="128"
      y1="48"
      x2="128"
      y2="80"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-linejoin="round"
      stroke-width="32"
      stroke-linecap="round"
      x1="384"
      y1="48"
      x2="384"
      y2="80"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-linejoin="round"
      stroke-width="32"
      stroke-linecap="round"
      x1="464"
      y1="160"
      x2="48"
      y2="160"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCalendarClearOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
