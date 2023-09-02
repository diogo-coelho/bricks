<template>
  <div class="br-switch" :class="rootClasses">
    <label>
      <input
        type="checkbox"
        :checked="computedChecked"
        :disabled="computedDisabled"
        @input="toggleCheckboxStatus(!checkedValue)"
      />
      <span class="slider round"></span>
    </label>
    <span class="br-switch-label" :class="rootClasses">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { SwitchProps } from '../../types/_switch'
import { computed, ComputedRef, defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  name: 'BrSwitch',
  props: {
    /**
     * Set initial status as checked
     * @values true, false
     */
    checked: {
      type: Boolean,
      default: () => undefined,
    },
    /**
     * Disable checkbox
     * @values true, false
     */
    disabled: {
      type: Boolean,
      default: () => undefined,
    },
    /**
     * Size of the checkbox
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => undefined,
      validator: (value: string) => {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
  },
  emits: ['on-change'],
  setup(props: SwitchProps, { emit }) {
    const checkedValue: Ref<boolean> = props.checked ? ref(true) : ref(false)

    const computedChecked: ComputedRef<boolean> = computed(
      () => checkedValue.value
    )

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        props.size ? `br-switch--${props.size}` : ``,
        computedDisabled.value ? ' disabled' : '',
      ]
    })

    const toggleCheckboxStatus = (value: boolean) => {
      checkedValue.value = value
      emit('on-change', computedChecked.value)
    }

    return {
      checkedValue,
      computedChecked,
      computedDisabled,
      rootClasses,
      toggleCheckboxStatus,
    }
  },
})
</script>
