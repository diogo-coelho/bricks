<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <path
      d="M320,176a16,16,0,0,0-16,16v53L192.32,177.56A10.78,10.78,0,0,0,176,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L304,267v53a16,16,0,0,0,32,0V192A16,16,0,0,0,320,176Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconPlaySkipForwardCircleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
