<template>
  <button 
    class="br-button"
    @click="onClick"
  >
	<slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BrButton',
	setup () {
		const onClick = (event: MouseEvent) : void => {
			console.log("clicou no BrButton")
		}

		return {
			onClick
		}
	}
})
</script>