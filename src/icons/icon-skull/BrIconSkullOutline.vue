<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M448,225.64v99a64,64,0,0,1-40.23,59.42l-23.68,9.47A32,32,0,0,0,364.6,417l-10,50.14A16,16,0,0,1,338.88,480H173.12a16,16,0,0,1-15.69-12.86L147.4,417a32,32,0,0,0-19.49-23.44l-23.68-9.47A64,64,0,0,1,64,324.67V224C64,118.08,149.77,32.19,255.65,32S448,119.85,448,225.64Z"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <circle
      cx="168"
      cy="280"
      r="40"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <circle
      cx="344"
      cy="280"
      r="40"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <polygon
      points="256 336 240 384 272 384 256 336"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="256"
      y1="448"
      x2="256"
      y2="480"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="208"
      y1="448"
      x2="208"
      y2="480"
      style="
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      "
      :style="{ stroke: color }"
    />
    <line
      x1="304"
      y1="448"
      x2="304"
      y2="480"
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
  name: 'BrIconSkullOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
