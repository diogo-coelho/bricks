<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M447.86,384H64.14A48.2,48.2,0,0,1,16,335.86V128.14A48.2,48.2,0,0,1,64.14,80H447.86A48.2,48.2,0,0,1,496,128.14V335.86A48.2,48.2,0,0,1,447.86,384Z"
      :style="{ fill: color }"
    />
    <line
      x1="128"
      y1="416"
      x2="384"
      y2="416"
      style="stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconTv',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
