<template>
	<div class="br-radio-group">
		<slot></slot>
	</div>
</template>
  
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { RadioGroupProps } from '../../types/_radio'
import useEventRadioListener from '../../listeners/radioEventListener'
  
export default defineComponent({
  name: 'BrRadioGroup',
  props: {
	/**
	 * Name of radio group
	 * @values string
	 */
	name: {
		type: String,
		required: true
	}
  },
  emits: ['on-change'],
  setup (props: RadioGroupProps) {
	const selectedRadio = useEventRadioListener()

	provide('radio-group-control', { 
		name: props.name,
		selectedRadio
	})

	return {
		selectedRadio
	}
  }
})
</script>

  