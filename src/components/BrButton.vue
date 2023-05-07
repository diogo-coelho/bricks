<template>
  <button class="br-button">
	<slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup () {
		const onClick = (event: MouseEvent) : void => {
			console.log("clicou aqui")
		}

		return {
			onClick
		}
	}
})
</script>