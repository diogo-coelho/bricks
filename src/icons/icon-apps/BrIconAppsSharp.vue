<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="48"
      y="48"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="200"
      y="48"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="352"
      y="48"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="48"
      y="200"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="200"
      y="200"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="352"
      y="200"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="48"
      y="352"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="200"
      y="352"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="352"
      y="352"
      width="112"
      height="112"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconAppsSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
