<template>
  <div class="br-radio-group" :class="rootClasses">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  provide,
  Ref,
  ref,
} from 'vue'
import { RadioGroupProps } from '../../types/_radio'
import {
  addRadioElement,
  getRadioElementsLength,
  setSelectedRadio,
} from '../../listeners/radioEventListener'
import { generateHashCode } from '../../helpers/generateHashCode'

export default defineComponent({
  name: 'BrRadioGroup',
  props: {
    /**
     * Name of radio group
     * @values string
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Label of radio group
     * @values string
     */
    label: {
      type: String,
      default: () => undefined,
    },
    /**
     * Set an initial value
     * @values string
     */
    value: {
      type: String,
      default: () => undefined,
    },
    /**
     * Size of radio group
     * @values true, false
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
  setup(props: RadioGroupProps, { emit }) {
    const id: Ref<string | null> = ref(null)
    const checkedValue: Ref<string> = ref('')

    const computedValue: ComputedRef<string | undefined> = computed(() => {
      if (props.value) return props.value
      return undefined
    })

    checkedValue.value = computedValue.value || ''

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [props.size ? `br-radio-group--${props.size}` : ``]
    })

    const setRadioChecked = () => {
      if (computedValue.value) {
        setSelectedRadio({
          id: id.value as string,
          value: computedValue.value,
          checked: true,
        })
      }
    }

    const createIdentifierAndRegistry = () => {
      const number = getRadioElementsLength()
      id.value = `radio-group-${generateHashCode((number + 1).toString())}`
      addRadioElement(id.value)
    }

    const emitValue = (value: string) => {
      checkedValue.value = value
      emit('on-change', value)
    }

    provide('radio-group-control', {
      name: props.name,
      id: computed(() => id.value),
      emitValue,
    })

    onMounted(() => {
      createIdentifierAndRegistry()
      setRadioChecked()
    })

    return {
      rootClasses,
      checkedValue,
    }
  },
})
</script>
