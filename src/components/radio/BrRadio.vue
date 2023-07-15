<template>
  <div class="br-radio" @click="toggleRadioStatus(!computedChecked)">
    <input
      ref="radioRef"
      type="radio"
      :name="computedName"
      :checked="computedChecked"
    />
    <span class="checkmark"></span>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, inject, ref, Ref } from 'vue'
import { RadioProps, RadioProvidedAttributes } from '../../types/_radio'
import useEventRadioListener, {
  setSelectedRadio,
} from '../../listeners/radioEventListener'
import { generateHashCode } from '../../helpers/generateHashCode'

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
  },
  setup(props: RadioProps) {
    const { name } = inject('radio-group-control') as RadioProvidedAttributes
    const id: Ref<string> = ref(`radio-group-${generateHashCode(name)}`)
    const selectedRadio = useEventRadioListener()

    const computedChecked: ComputedRef<boolean | undefined> = computed(() => {
      const radioElement = selectedRadio.find((radio) => radio.id == id.value)
      if (!radioElement) return undefined
      return radioElement?.value === props.value ? radioElement.checked : false
    })

    const computedName: ComputedRef<string> = computed(() => {
      if (!name) return ''
      return name as string
    })

    const toggleRadioStatus = (checked: boolean) => {
      setSelectedRadio({ id: id.value, value: props.value, checked })
    }

    return {
      computedName,
      computedChecked,
      toggleRadioStatus,
    }
  },
})
</script>

<style></style>
