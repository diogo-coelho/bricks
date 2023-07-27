<template>
  <div class="br-table" :class="rootClasses">
	<table>
		<slot></slot>
	</table> 
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { TableProps } from '../../types/_table'

export default defineComponent({
	name: "BrTable",
	props: {
		/**
		 * Set table with 100% width
		 * @values true, false
		 */
		fullWidth: {
			type: Boolean,
			default: () => undefined
		},
		/**
		 * Set table as responsive behavior
		 * @values true, false
		 */
		responsive: {
			type: Boolean,
			default: () => undefined
		}
	},
	setup (props: TableProps) {
		const computedWidth: ComputedRef<boolean | undefined> = computed(() => {
			if (props.fullWidth) return true
			return undefined
		})

		const computedResponsive: ComputedRef<boolean | undefined> = computed(() => {
			if (props.responsive) return true
			return undefined
		})

		const rootClasses: ComputedRef<string[]> = computed(() => {
			return [
				computedWidth.value ? `br-table--full-width` : '',
				computedResponsive.value ? `br-table--responsive` : ''
			]
		})

		return {
			rootClasses
		}
	}
})
</script>