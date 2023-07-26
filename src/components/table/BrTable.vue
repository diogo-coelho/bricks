<template>
  <table>
	<slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BrTable"
})
</script>