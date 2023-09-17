<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z"
      :style="{ fill: color }"
    />
    <path
      d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconJournalSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
