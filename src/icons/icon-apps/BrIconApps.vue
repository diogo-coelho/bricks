<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z"
      :style="{ fill: color }"
    />
    <path
      d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z"
      :style="{ fill: color }"
    />
    <path
      d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z"
      :style="{ fill: color }"
    />
    <path
      d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z"
      :style="{ fill: color }"
    />
    <path
      d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z"
      :style="{ fill: color }"
    />
    <path
      d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconApps',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
