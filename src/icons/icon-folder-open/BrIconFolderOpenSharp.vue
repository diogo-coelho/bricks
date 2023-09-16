<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M16.08,189.4,44.66,423.27A28,28,0,0,0,72.52,448h367a28,28,0,0,0,27.86-24.73L495.92,189.4A12,12,0,0,0,484,176H28A12,12,0,0,0,16.08,189.4Z"
      :style="{ fill: color }"
    />
    <path
      d="M464,124a28,28,0,0,0-28-28H244.84l-48-32H76A28,28,0,0,0,48,92v52H464Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFolderOpenSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
