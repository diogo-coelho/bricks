<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="158.6"
      y="150.86"
      width="95.03"
      height="110.51"
      transform="translate(-85.38 206.12) rotate(-45)"
      :style="{ fill: color }"
    />
    <polygon
      points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21"
      :style="{ fill: color }"
    />
    <rect x="32" y="176" width="80" height="32" :style="{ fill: color }" />
    <rect
      x="91.22"
      y="67.22"
      width="32"
      height="80"
      transform="translate(-44.41 107.22) rotate(-45)"
      :style="{ fill: color }"
    />
    <rect x="176" y="32" width="32" height="80" :style="{ fill: color }" />
    <rect
      x="236.92"
      y="91.22"
      width="80"
      height="32"
      transform="translate(5.29 227.22) rotate(-45)"
      :style="{ fill: color }"
    />
    <rect
      x="67.22"
      y="260.92"
      width="80"
      height="32"
      transform="translate(-164.41 156.92) rotate(-45)"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconColorWandSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
