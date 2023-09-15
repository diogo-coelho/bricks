<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M136 104L256 208L376 104"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
	  :style="{stroke:color}"
    />
    <path
      d="M136 408L256 304L376 408"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
	  :style="{stroke:color}"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconChevronCollapseOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
