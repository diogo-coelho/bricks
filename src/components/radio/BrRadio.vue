<template>
  <div class="br-radio" :class="rootClasses" @click="toggleRadioStatus(true)">
    <input
      ref="radioRef"
      type="radio"
      :name="computedName"
      :checked="computedChecked"
      :disabled="computedDisabled"
    />
    <span class="checkmark"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, inject } from 'vue'
import { RadioProps, RadioProvidedAttributes } from '../../types/_radio'
import useEventRadioListener, {
  setSelectedRadio,
} from '../../listeners/radioEventListener'

export default defineComponent({
  name: 'BrRadio',
  props: {
    /**
     * Value of radio
     * @values string
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * Desabilita a opção de radio
     * @values true, false
     */
    disabled: {
      type: Boolean,
    },
  },
  setup(props: RadioProps) {
    const { id, name, emitValue } = inject(
      'radio-group-control'
    ) as RadioProvidedAttributes
    const selectedRadio = useEventRadioListener()

    const computedChecked: ComputedRef<boolean | undefined> = computed(() => {
      const radioElement = selectedRadio.find((radio) => radio.id == id?.value)
      if (!radioElement) return undefined
      return radioElement?.value === props.value ? radioElement.checked : false
    })

    const computedName: ComputedRef<string> = computed(() => {
      if (!name) return ''
      return name as string
    })

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [computedDisabled.value ? ' disabled' : '']
    })

    const toggleRadioStatus = (checked: boolean) => {
      if (!computedDisabled.value) {
        setSelectedRadio({
          id: id?.value as string,
          value: props.value,
          checked,
        })
        emitValue(props.value)
      }
    }

    return {
      computedName,
      computedChecked,
      computedDisabled,
      rootClasses,
      toggleRadioStatus,
    }
  },
})
</script>
