<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <line
      x1="88"
      y1="152"
      x2="424"
      y2="152"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="88"
      y1="256"
      x2="424"
      y2="256"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="88"
      y1="360"
      x2="424"
      y2="360"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 48px;
      "
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconMenu',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
