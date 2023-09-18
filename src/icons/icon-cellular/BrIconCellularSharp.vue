<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M496,432H400V80h96Z" :style="{ fill: color }" />
    <path d="M368,432H272V160h96Z" :style="{ fill: color }" />
    <path d="M240,432H144V224h96Z" :style="{ fill: color }" />
    <path d="M112,432H16V288h96Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCellularSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
