<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M448,224H380a128,128,0,0,0-247.9,0H64a32,32,0,0,0,0,64h68.05A128,128,0,0,0,380,288H448a32,32,0,0,0,0-64ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconGitCommit',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
