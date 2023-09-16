<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="80"
      y="16"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="208"
      y="16"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="336"
      y="16"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="80"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="208"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="336"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="80"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="208"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="208"
      y="400"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="336"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconKeypadSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
