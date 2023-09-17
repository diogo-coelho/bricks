<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="256"
      cy="184"
      r="152"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="336"
      x2="256"
      y2="480"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <line
      x1="314"
      y1="416"
      x2="198"
      y2="416"
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
  name: 'BrIconFemaleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
