<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M16,352a48.05,48.05,0,0,0,48,48H197.88l-4,32H144a16,16,0,0,0,0,32H368a16,16,0,0,0,0-32H318.12l-4-32H448a48.05,48.05,0,0,0,48-48V304H16Zm240-16a16,16,0,1,1-16,16A16,16,0,0,1,256,336Z"
      :style="{ fill: color }"
    />
    <path
      d="M496,96a48.05,48.05,0,0,0-48-48H64A48.05,48.05,0,0,0,16,96V288H496Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconDesktop',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
