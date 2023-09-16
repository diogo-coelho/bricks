<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M240,240H32V32H240Z" :style="{ fill: color }" />
    <path d="M480,240H272V32H480Z" :style="{ fill: color }" />
    <path d="M240,480H32V272H240Z" :style="{ fill: color }" />
    <path d="M480,480H272V272H480Z" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconGridSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
