<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
    <path
      d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconKeypad',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
