<template>
  <div ref="BrSelect" v-bind="$attrs" class="select">
    <input />
    <p>{{ label }}</p>
    <button>
      <BrIconKeyboardArrowDown />
    </button>

    <teleport to="body">
      <div class="select-dropdown">
        <ul>
          <br-select-item
            v-for="(item, i) in items"
            :key="`br-select-item-${i}`"
            :item="item"
            @selected-value="setSelectValue"
          />
        </ul>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import BrSelectItem from '../select-item/BrSelectItem.vue'
import BrIconKeyboardArrowDown from '../../icons/icon-keyboard-arrow-down/BrIconKeyboardArrowDown.vue'
import { SelectProps, SelectOption } from '../../types/_select'

export default defineComponent({
  name: 'BrSelect',
  components: {
    BrSelectItem,
    BrIconKeyboardArrowDown,
  },
  props: {
    /**
     * Items of menu select dropdown
     * @values { value: string, label: string }[]
     */
    items: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
    /**
     * Set label od select input
     * @values string
     */
    label: {
      type: String,
      default: () => '',
    },
  },
  setup(props: SelectProps) {
    const setSelectValue = (item: SelectOption): void => {
      console.log('função setSelectVaue')
    }

    return {
      setSelectValue,
    }
  },
})
</script>

<style></style>
