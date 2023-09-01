<template>
  <li :class="{ active: active }">
    <p class="option" :value="value" @click="selectValue()">
      <slot></slot>
    </p>

    <button v-if="button">
      {{ button.label }}
      <component :is="button.icon?.toString() || ''" />
    </button>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  inject,
  computed,
  ComputedRef,
  useSlots,
} from 'vue'
import {
  SelectItemProps,
  SelectItemButton,
  SelectProvidedAttributes,
  SelectOption,
} from '../../types/_select'
import { setSelectedSelectInput } from '../../listeners/selectEventListener'
import * as Icons from '../../icons/icons'

export default defineComponent({
  name: 'BrSelectItem',
  components: {
    ...Icons,
  },
  props: {
    /**
     * select item value
     * @values string
     */
    value: {
      type: String,
      default: () => '',
    },
    /**
     * select item button
     * @values SelectItemButton
     */
    button: {
      type: Object as PropType<SelectItemButton>,
      default: () => undefined,
    },
  },
  emits: ['selected-option'],
  setup(props: SelectItemProps) {
    const slots = useSlots()
    const label = slots.default ? slots?.default() : undefined
    const computedLabel: ComputedRef<string> = computed(() => {
      return label && label.length > 0 ? label[0].children!.toString() : ''
    })

    const { id, selected, emitValue } = inject(
      'select-group-control'
    ) as SelectProvidedAttributes

    const computedSelected: ComputedRef<SelectOption | undefined> = computed(
      () => {
        if (!selected.value) return undefined
        return selected.value
      }
    )

    const active: ComputedRef<boolean> = computed(
      () => computedSelected.value?.value === props.value
    )

    const selectValue = () => {
      setSelectedSelectInput({
        id: id?.value as string,
        value: props.value,
      })
      emitValue({ value: props.value, label: computedLabel.value })
    }

    return {
      computedSelected,
      active,
      selectValue,
    }
  },
})
</script>

function setSelectedRadio(arg0: { id: string; value: string; checked: any }) {
throw new Error('Function not implemented.') }
