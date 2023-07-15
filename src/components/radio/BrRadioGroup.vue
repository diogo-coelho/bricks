<template>
  <div class="br-radio-group">
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
  },
  emits: ['on-change'],
  setup(props: RadioGroupProps) {
    const id: Ref<string | null> = ref(null)

    const computedValue: ComputedRef<string | undefined> = computed(() => {
      if (props.value) return props.value
      return undefined
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

    onMounted(() => {
      createIdentifierAndRegistry()
      setRadioChecked()
    })

    provide('radio-group-control', {
      name: props.name,
	  id: computed(() => id.value)
    })
  },
})
</script>
