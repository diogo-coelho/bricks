<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="64"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="216"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="368"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="64"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="216"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="368"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="64"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="216"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="368"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      style="fill: none; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconAppsOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
