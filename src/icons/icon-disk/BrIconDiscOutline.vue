<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="256"
      cy="256"
      r="208"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <circle
      cx="256"
      cy="256"
      r="96"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <circle cx="256" cy="256" r="32" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconDiscOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
