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
      d="M394.77,246.7,280.32,177.56A10.78,10.78,0,0,0,264,186.87v53.32L160.32,177.56A10.78,10.78,0,0,0,144,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L264,271.81v53.32a10.78,10.78,0,0,0,16.32,9.31L394.77,265.3A10.89,10.89,0,0,0,394.77,246.7Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconPlayForwardCircleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
