<template>
  <button
    v-bind="$attrs"
    :class="rootClasses"
    :type="type"
    :disabled="computedDisabled"
    @click="onClick"
  >
    <div :class="slots.preffix ? preffixSlotSpacing : ''">
      <slot name="preffix" />
    </div>
    <a
      v-if="computedLink"
      :href="computedDisabled ? 'javascript:void(0)' : computedLink.href"
      :target="computedLink.target"
      :download="computedLink.download"
    >
      <slot />
    </a>

    <slot v-else />
    <div :class="slots.suffix ? suffixSlotSpacing : ''">
      <slot name="suffix" />
    </div>
  </button>
</template>

<script lang="ts">
import {
  ButtonHTMLAttributes,
  computed,
  ComputedRef,
  defineComponent,
  PropType,
  useSlots,
  defineEmits,
  SetupContext,
} from 'vue'
import { ButtonProps, ButtonLink } from '../../types/_button'

export default defineComponent({
  name: 'BrButton',
  inheritAttrs: false,
  props: {
    /**
     * disabled status
     * @values true, false
     */
    disabled: {
      type: Boolean,
    },
    /**
     * Color of button
     * @values primary, secondary, info, warning, danger
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return (
          ['primary', 'neutral', 'success', 'warning', 'danger'].indexOf(
            value
          ) >= 0
        )
      },
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
     * size of button
     * @values small, medium, large
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['small', 'medium', 'large'].indexOf(value) >= 0
      },
    },
    /**
     * pill button
     * @values true, false
     */
    pill: {
      type: Boolean,
    },
    /**
     * Outline Button
     * @values true, false
     */
    outline: {
      type: Boolean,
    },
    /**
     * Text Buttons
     * @values true, false
     */
    text: {
      type: Boolean,
    },
    /**
     * Href link
     * @values web string
     */
    link: {
      type: Object as PropType<ButtonLink>,
    },
  },
  setup(props: ButtonProps, {emit}: SetupContext) {
    const slots = useSlots()

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const computedPill: ComputedRef<boolean | undefined> = computed(() => {
      if (props.pill) return true
      return undefined
    })

    const computedOutline: ComputedRef<boolean | undefined> = computed(() => {
      if (props.outline) return true
      return undefined
    })

    const computedTextButton: ComputedRef<boolean | undefined> = computed(
      () => {
        if (props.text) return true
        return undefined
      }
    )

    const computedLink: ComputedRef<ButtonLink | undefined> = computed(() => {
      try {
        if (!props.link) return undefined

        let obj = JSON.parse(JSON.stringify(props.link))
        if (!Object.keys(obj) || !Object.keys(obj).includes('href'))
          throw new Error('Attribute link is in invalid format')

        return obj
      } catch (error: unknown) {
        console.error(error)
        return undefined
      }
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        `br-button ripple`,
        props.size ? `br-button--${props.size}` : ``,
        props.variant ? `br-button--${props.variant}` : ``,
        computedDisabled.value ? `disabled` : '',
        computedPill.value ? `br-button--pill` : '',
        computedOutline.value ? `outline` : '',
        computedTextButton.value ? `text` : '',
      ]
    })

    const preffixSlotSpacing: ComputedRef<string> = computed(() => {
      switch (props.size) {
        case 'small':
          return 'mr-2x-small'
        case 'medium':
          return 'mr-medium'
        case 'large':
          return 'mr-large'
        default:
          return 'mr-small'
      }
    })

    const suffixSlotSpacing: ComputedRef<string> = computed(() => {
      switch (props.size) {
        case 'small':
          return 'ml-2x-small'
        case 'medium':
          return 'ml-medium'
        case 'large':
          return 'ml-large'
        default:
          return 'ml-small'
      }
    })

	const onClick = (event: MouseEvent): void => {
	  emit('on-click', event)
	}

	const onFocus = (event: KeyboardEvent): void => {
	  emit('on-focus', event)
	}

	const onBlur = (event: KeyboardEvent): void => {
	  emit('on-blur', event)
	}

    return {
      computedDisabled,
      computedPill,
      computedOutline,
      computedTextButton,
      computedLink,
      rootClasses,
      preffixSlotSpacing,
      suffixSlotSpacing,
      slots,
      onClick,
	  onFocus,
	  onBlur,
	  emit,
    }
  },
})
</script>
