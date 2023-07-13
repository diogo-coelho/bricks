<template>
  <div
    class="br-checkbox"
    :class="rootClasses"
    @click="toggleCheckboxStatus(!checkedValue)"
  >
    <input
      type="checkbox"
      :checked="computedChecked"
      :disabled="computedDisabled"
      @input="toggleCheckboxStatus(!checkedValue)"
    />
    <span class="checkmark"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  ref,
  Ref,
  defineExpose,
} from 'vue'
import { CheckboxProps } from '../../types/_checkbox'

export default defineComponent({
  name: 'BrCheckbox',
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
  setup(props: CheckboxProps, { emit }) {
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
        props.size ? `br-checkbox--${props.size}` : ``,
        computedDisabled.value ? ' disabled' : '',
      ]
    })

    const toggleCheckboxStatus = (value: boolean) => {
      checkedValue.value = value
      emit('on-change', computedChecked.value)
    }

    defineExpose({ checkedValue })

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

<style></style>
