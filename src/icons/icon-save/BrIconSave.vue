<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M465.94,119.76l-73.7-73.7h0A47.68,47.68,0,0,0,358.3,32H96A64,64,0,0,0,32,96V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V153.7A47.68,47.68,0,0,0,465.94,119.76ZM120,112H296a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V120A8,8,0,0,1,120,112ZM259.75,431.91a80,80,0,1,1,76.16-76.16A80.06,80.06,0,0,1,259.75,431.91Z"
      :style="{ fill: color }"
    />
    <circle cx="256" cy="352" r="48" :style="{ fill: color }" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconSave',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
