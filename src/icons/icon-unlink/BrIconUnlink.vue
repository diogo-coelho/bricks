<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      :style="{ stroke: color }"
    />
    <path
      d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconUnlink',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
