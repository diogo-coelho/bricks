<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M432,64H96A16,16,0,0,0,80,80V272a96.11,96.11,0,0,0,96,96H288a96.11,96.11,0,0,0,96-96V192h18a62.07,62.07,0,0,0,62-62V96A32,32,0,0,0,432,64Zm0,66a30,30,0,0,1-30,30H384V96h48Z"
      :style="{ fill: color }"
    />
    <path
      d="M400,400H64a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCafe',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
