<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M32,376a56,56,0,0,0,56,56H424a56,56,0,0,0,56-56V222H32Zm66-76a30,30,0,0,1,30-30h48a30,30,0,0,1,30,30v20a30,30,0,0,1-30,30H128a30,30,0,0,1-30-30Z"
      :style="{ fill: color }"
    />
    <path
      d="M424,80H88a56,56,0,0,0-56,56v26H480V136A56,56,0,0,0,424,80Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCard',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
