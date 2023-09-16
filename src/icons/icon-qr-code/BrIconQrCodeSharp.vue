<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect x="336" y="336" width="80" height="80" :style="{ fill: color }" />
    <rect x="272" y="272" width="64" height="64" :style="{ fill: color }" />
    <rect x="416" y="416" width="64" height="64" :style="{ fill: color }" />
    <rect x="432" y="272" width="48" height="48" :style="{ fill: color }" />
    <rect x="272" y="432" width="48" height="48" :style="{ fill: color }" />
    <rect x="336" y="96" width="80" height="80" :style="{ fill: color }" />
    <path
      d="M480,240H272V32H480ZM316,196H436V76H316Z"
      :style="{ fill: color }"
    />
    <rect x="96" y="96" width="80" height="80" :style="{ fill: color }" />
    <path d="M240,240H32V32H240ZM76,196H196V76H76Z" :style="{ fill: color }" />
    <rect x="96" y="336" width="80" height="80" :style="{ fill: color }" />
    <path
      d="M240,480H32V272H240ZM76,436H196V316H76Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconQrCodeSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
