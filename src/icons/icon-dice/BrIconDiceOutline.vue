<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z"
      :style="{ stroke: color }"
    />
    <polyline
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      points="69 153.99 256 263.99 443 153.99"
      :style="{ stroke: color }"
    />
    <line
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      x1="256"
      y1="463.99"
      x2="256"
      y2="263.99"
      :style="{ stroke: color }"
    />
    <ellipse cx="256" cy="152" rx="24" ry="16" :style="{ fill: color }" />
    <ellipse cx="208" cy="296" rx="16" ry="24" :style="{ fill: color }" />
    <ellipse cx="112" cy="328" rx="16" ry="24" :style="{ fill: color }" />
    <ellipse cx="304" cy="296" rx="16" ry="24" :style="{ fill: color }" />
    <ellipse cx="400" cy="240" rx="16" ry="24" :style="{ fill: color }" />
    <ellipse cx="304" cy="384" rx="16" ry="24" :style="{ fill: color }" />
    <ellipse cx="400" cy="328" rx="16" ry="24" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconDiceOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
