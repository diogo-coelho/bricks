<template>
  <button
    v-bind="$attrs"
    :class="rootClasses"
    :type="type"
    :disabled="computedDisabled"
    :style="buttonStyles"
    @mouseover="setIconColorOnMouseOver()"
    @mouseout="setIconColor()"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <br-icon :name="computedName" :color="iconColor" />
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  ComputedRef,
  computed,
  PropType,
  ButtonHTMLAttributes,
  Ref,
  ref,
  onMounted,
} from 'vue'
import BrIcon from '../icon/BrIcon.vue'
import { ButtonIcon } from '../../types/_button'
import {
  colorOnMouseOver,
  colorOnMouseOut,
} from '../../helpers/iconButtonColorHandler'
import colorPaletteGenerator, {
  ColorPaletteModel,
} from '../../utils/colorPaletteGenerator'

export default defineComponent({
  name: 'BrButtonIcon',
  components: {
    BrIcon,
  },
  inheritAttrs: false,
  props: {
    /**
     * Name of icon
     * @values string
     */
    name: {
      type: String,
      default: () => '',
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
      default: () => undefined,
    },
    /**
     * icon button without borders
     * @values boolean
     */
    noBorders: {
      type: Boolean,
    },
  },
  emits: ['on-click', 'on-focus', 'on-blur'],
  setup(props: ButtonIcon, { emit }) {
    const iconColor: Ref<string | undefined> = ref(undefined)
    const buttonStyles: Ref<Partial<CSSStyleDeclaration> | undefined> =
      ref(undefined)

    const computedColors: ComputedRef<ColorPaletteModel | undefined> = computed(
      () => {
        if (!props.color) return undefined
        return colorPaletteGenerator(props.color as string)
      }
    )

    const computedName: ComputedRef<string> = computed(() => {
      return `br-icon-${props.name}`
    })

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const computedNoBorders: ComputedRef<boolean | undefined> = computed(() => {
      if (props.noBorders) return true
      return undefined
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        `br-icon-button ripple`,
        computedDisabled.value ? `disabled` : '',
        computedNoBorders.value ? `no-borders` : '',
      ]
    })

    const onClick = (event: MouseEvent): void => {
      emit('on-click', event)
    }

    const onFocus = (payload: FocusEvent): void => {
      emit('on-focus', payload)
    }

    const onBlur = (payload: FocusEvent): void => {
      emit('on-blur', payload)
    }

    const configureButtonStyles = (
      color: ColorPaletteModel,
      isMouseOver = false
    ): Partial<CSSStyleDeclaration> => {
      return {
        border: computedNoBorders.value
          ? 'transparent'
          : `1px solid ${color.primaryColor300}`,
        backgroundColor:
          isMouseOver && !computedNoBorders.value
            ? `${color.primaryColor300}`
            : 'transparent',
      }
    }

    const setIconColor = () => {
      const color: string | undefined = computedColors.value
        ? computedColors.value.primaryColor500
        : undefined
      iconColor.value = colorOnMouseOut({ disabled: props.disabled, color })
      buttonStyles.value = computedColors.value
        ? configureButtonStyles(computedColors.value)
        : undefined
    }

    const setIconColorOnMouseOver = () => {
      const color: string | undefined = computedColors.value
        ? computedColors.value.primaryColor700
        : undefined
      iconColor.value = colorOnMouseOver({ disabled: props.disabled, color })
      buttonStyles.value = computedColors.value
        ? configureButtonStyles(computedColors.value, true)
        : undefined
    }

    onMounted(() => setIconColor())

    return {
      iconColor,
      computedName,
      computedDisabled,
      rootClasses,
      buttonStyles,
      setIconColorOnMouseOver,
      setIconColor,
      onClick,
      onFocus,
      onBlur,
      emit,
    }
  },
})
</script>
