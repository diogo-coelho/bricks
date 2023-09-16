<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z"
      :style="{ fill: color }"
    />
    <path
      d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z"
      :style="{ fill: color }"
    />
    <path
      d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFilter',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
