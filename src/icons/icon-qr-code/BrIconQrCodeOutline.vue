<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="336"
      y="336"
      width="80"
      height="80"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="272"
      y="272"
      width="64"
      height="64"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="416"
      y="416"
      width="64"
      height="64"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="432"
      y="272"
      width="48"
      height="48"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="272"
      y="432"
      width="48"
      height="48"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="336"
      y="96"
      width="80"
      height="80"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="288"
      y="48"
      width="176"
      height="176"
      rx="16"
      ry="16"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="96"
      y="96"
      width="80"
      height="80"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="48"
      y="48"
      width="176"
      height="176"
      rx="16"
      ry="16"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <rect
      x="96"
      y="336"
      width="80"
      height="80"
      rx="8"
      ry="8"
      :style="{ fill: color }"
    />
    <rect
      x="48"
      y="288"
      width="176"
      height="176"
      rx="16"
      ry="16"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconQrCodeOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
