<template>
  <button
    v-bind="$attrs"
    :class="rootClasses"
    :type="type"
    :disabled="computedDisabled"
    @mouseover="setIconColorOnMouseOver"
    @mouseout="setIconColor"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div v-if="prefix" :class="prefixSlotSpacing">
      <br-icon :name="prefix" :color="iconColor" />
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
    <div v-if="suffix" :class="suffixSlotSpacing">
      <br-icon :name="suffix" :color="iconColor" />
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
  Ref,
  ref,
  onMounted,
} from 'vue'
import { ButtonProps, ButtonLink } from '../../types/_button'
import BrIcon from '../icon/BrIcon.vue'
import {
  colorOnMouseOver,
  colorOnMouseOut,
  ColorConfiguration,
} from '../../helpers/iconButtonColorHandler'

export default defineComponent({
  name: 'BrButton',
  components: {
    BrIcon,
  },
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
     * @values primary, neutral, success, warning, danger
     */
    variant: {
      type: String,
      default: () => undefined,
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
      default: () => undefined,
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
     * @values { href: string,
     * target: '_blank' | '_self' | '_parent' | '_top' | 'framename' | undefined,
     * download: string | undefined }
     */
    link: {
      type: Object as PropType<ButtonLink>,
      default: () => undefined,
    },
    /**
     * Set a prefix icon
     * @values icon name
     */
    prefix: {
      type: String,
      default: () => undefined,
    },
    /**
     * Set a suffix icon
     * @values icon name
     */
    suffix: {
      type: String,
      default: () => undefined,
    },
  },
  emits: ['on-click', 'on-focus', 'on-blur'],
  setup(props: ButtonProps, { emit }) {
    const iconColor: Ref<string | undefined> = ref(undefined)
    const colorConfiguration: ColorConfiguration = {
      disabled: props.disabled,
      variant: props.variant,
      outline: props.outline,
    }
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

    const prefixSlotSpacing: ComputedRef<string> = computed(() => {
      switch (props.size) {
        case 'small':
          return 'pr-2x-small'
        case 'medium':
          return 'pr-small'
        case 'large':
          return 'pr-medium'
        default:
          return 'pr-x-small'
      }
    })

    const suffixSlotSpacing: ComputedRef<string> = computed(() => {
      switch (props.size) {
        case 'small':
          return 'pl-2x-small'
        case 'medium':
          return 'pl-small'
        case 'large':
          return 'pl-medium'
        default:
          return 'pl-x-small'
      }
    })

    const setIconColor = () => {
      iconColor.value = colorOnMouseOut(colorConfiguration)
    }

    const setIconColorOnMouseOver = () => {
      iconColor.value = colorOnMouseOver(colorConfiguration)
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

    onMounted(() => setIconColor())

    return {
      iconColor,
      computedDisabled,
      computedPill,
      computedOutline,
      computedTextButton,
      computedLink,
      rootClasses,
      prefixSlotSpacing,
      suffixSlotSpacing,
      onClick,
      onFocus,
      onBlur,
      emit,
      setIconColor,
      setIconColorOnMouseOver,
    }
  },
})
</script>
