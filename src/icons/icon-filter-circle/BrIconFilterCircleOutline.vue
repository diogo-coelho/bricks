<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="none"
      stroke-width="32"
      stroke-miterlimit="10"
      d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
      x1="144"
      y1="208"
      x2="368"
      y2="208"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
      x1="176"
      y1="272"
      x2="336"
      y2="272"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
      x1="224"
      y1="336"
      x2="288"
      y2="336"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFilterCircleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
