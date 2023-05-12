<template>
  <button
    v-bind="$attrs"
    :class="rootClasses"
    :type="type"
    :disabled="computedDisabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { ButtonHTMLAttributes, defineComponent, PropType } from 'vue'

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
          ['primary', 'neutral', 'info', 'warning', 'danger'].indexOf(value) >=
          0
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
  },
  setup() {
    const onClick = (event: MouseEvent): void => {
      console.log('clicou no BrButton')
      console.log(event.target)
    }

    return {
      onClick,
    }
  },
  computed: {
    rootClasses() {
      return [
        `br-button ripple`,
        this.size ? `br-button--${this.size}` : ``,
        this.variant ? `br-button--${this.variant}` : ``,
      ]
    },
    computedDisabled() {
      console.log(this.disabled)
      if (this.disabled) return true
      return undefined
    },
  },
})
</script>
