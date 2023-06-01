<template>
  <li :class="{ active: active }">
    <p class="option" @click="selectValue()">{{ item.label }}</p>

    <button v-if="item.button">
      <component :is="item.button?.icon?.toString() || ''" />
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SelectItemProps, SelectOption } from '../../types/_select'
import * as Icons from '../../icons/icons'

export default defineComponent({
  name: 'BrSelectItem',
  components: {
    ...Icons,
  },
  props: {
    /**
     * item do menu select
     *@values { value: string, label: string }
     */
    item: {
      type: Object as PropType<SelectOption>,
      default: () => ({ value: '', label: '' }),
    },
    /**
     * set active when choose
     * @values true, false
     */
    active: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['selected-option'],
  setup(props: SelectItemProps, { emit }) {
    const selectValue = () => {
      emit('selected-option', props.item)
    }

    return {
      selectValue,
    }
  },
})
</script>

<style></style>
