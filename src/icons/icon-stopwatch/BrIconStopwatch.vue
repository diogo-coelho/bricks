<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="272" r="16" :style="{ fill: color }" />
    <path
      d="M280,81.5V72a24,24,0,0,0-48,0v9.5a191,191,0,0,0-84.43,32.13L137,103A24,24,0,0,0,103,137l8.6,8.6A191.17,191.17,0,0,0,64,272c0,105.87,86.13,192,192,192s192-86.13,192-192C448,174.26,374.58,93.34,280,81.5ZM256,320a48,48,0,0,1-16-93.25V152a16,16,0,0,1,32,0v74.75A48,48,0,0,1,256,320Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconStopwatch',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
