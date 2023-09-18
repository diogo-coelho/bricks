<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="80"
      y1="160"
      x2="432"
      y2="160"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="80"
      y1="256"
      x2="432"
      y2="256"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="80"
      y1="352"
      x2="432"
      y2="352"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconMenuOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
