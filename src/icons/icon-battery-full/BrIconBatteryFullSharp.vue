<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path d="M17,384H449V128H17ZM49,160H417V352H49Z" :style="{ fill: color }" />
    <rect
      x="70.69"
      y="182.94"
      width="324.63"
      height="146.13"
      :style="{ fill: color }"
    />
    <rect
      x="465"
      y="202.67"
      width="32"
      height="106.67"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconBatteryFullSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
