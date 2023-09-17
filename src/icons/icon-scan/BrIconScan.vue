<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M342,444h46a56,56,0,0,0,56-56V342"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
	  :style="{stroke:color}"
    />
    <path
      d="M444,170V124a56,56,0,0,0-56-56H342"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
	  :style="{stroke:color}"
    />
    <path
      d="M170,444H124a56,56,0,0,1-56-56V342"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
	  :style="{stroke:color}"
    />
    <path
      d="M68,170V124a56,56,0,0,1,56-56h46"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 44px;
      "
	  :style="{stroke:color}"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconScan',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
