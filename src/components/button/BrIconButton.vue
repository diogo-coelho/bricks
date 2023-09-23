<template>
  <button
    v-bind="$attrs"
    :class="rootClasses"
    :type="type"
    :disabled="computedDisabled"
	@mouseover="setColor"
	@mouseout="removeColor"
    @click="onClick"
	@focus="onFocus"
	@blur="onBlur"
  >
    <br-icon :name="computedName" :color="colorOnMouseOver"/>
  </button>
</template>

<script lang="ts">
import { defineComponent, ComputedRef, computed, PropType, ButtonHTMLAttributes, Ref, ref } from 'vue'
import BrIcon from '../icon/BrIcon.vue'
import { ButtonIcon } from '../../types/_button'

export default defineComponent({
	name: 'BrButtonIcon',
	components: {
		BrIcon
	},
	inheritAttrs: false,
	props: {
		/**
		 * Name of icon
		 * @values string
		 */
		name: {
			type: String,
			default: () => ''
		},
		/**
		 * Type of button
		 * @values button, reset, submit
		 */
		type: {
			type: String as PropType<ButtonHTMLAttributes['type']>,
			default: () => 'button',
			validator: (value: string) => {
				return ['button', 'reset', 'submit'].indexOf(value) >= 0
			},
		},
		/**
		 * disabled status
		 * @values true, false
		 */
		disabled: {
			type: Boolean,
		},
		/**
		 * color of icon
		 * @values string
		 */
		color: {
			type: String,
			default: () => undefined
		}
	},
	emits: ['on-click', 'on-focus', 'on-blur'],
	setup (props: ButtonIcon, { emit }) {
		const colorOnMouseOver: Ref<string | undefined> = ref(undefined)
		const computedName: ComputedRef<string> = computed(() => {
			return `br-icon-${props.name}`
		})

		const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
			if (props.disabled) return true
      		return undefined
		})

		const rootClasses: ComputedRef<string[]> = computed(() => {
			return [
				`br-icon-button ripple`,
			]
		})

		const setColor = (): void => {
			if (props.color) {
				colorOnMouseOver.value = props.color
				return
			}
			colorOnMouseOver.value = `var(--br-color-primary-500)`
		}

		const removeColor = () : void => {
			colorOnMouseOver.value = undefined
		}

		const onClick = (event: MouseEvent): void => {
			emit('on-click', event)
		}

		const onFocus = (payload: FocusEvent): void => {
			emit('on-focus', payload)
		}

		const onBlur = (payload: FocusEvent): void => {
			emit('on-blur', payload)
		}

		return {
			colorOnMouseOver,
			computedName,
			computedDisabled,
			rootClasses,
			setColor,
			removeColor,
			onClick,
			onFocus,
			onBlur,
			emit,
		}
	}
})
</script>