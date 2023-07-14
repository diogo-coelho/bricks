<template>
  <div class="br-radio"
  	@click="toggleRadioStatus(!computedChecked)"
  >
	<input
	  ref="radioRef"
      type="radio"
	  :name="computedName"
	  :checked="computedChecked"
    />
    <span class="checkmark"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, inject, ref, Ref } from 'vue'
import { RadioProps, RadioProvidedAttributes } from '../../types/_radio'
import { setSelectedRadio } from '../../listeners/radioEventListener'

export default defineComponent({
  name: 'BrRadio',
  props: {
	/**
	 * Value of radio 
	 * @values string
	 */
	 value: {
		type: String,
		required: true
	},
  },
  setup (props: RadioProps) {
	const { name, selectedRadio } = inject('radio-group-control') as RadioProvidedAttributes

	const computedChecked: ComputedRef<boolean> = computed(
		() => selectedRadio.value === props.value ? selectedRadio.checked : false
	)

	const computedName: ComputedRef<string> = computed(() => {
		if (!name) return ''
		return name as string
	})

	const toggleRadioStatus = (checked: boolean) => {
		setSelectedRadio({ value: props.value, checked })
    }

	return {
		computedName,
		computedChecked,
		toggleRadioStatus
	}
  }
})
</script>

<style></style>
