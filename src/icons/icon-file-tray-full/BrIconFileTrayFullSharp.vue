<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect x="128" y="128" width="256" height="38" :style="{ fill: color }" />
    <rect x="112" y="192" width="288" height="38" :style="{ fill: color }" />
    <path
      d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFileTrayFullSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
