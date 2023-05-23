<template>
  <li>
    <p class="option" @click="selectValue()">{{ item.label }}</p>

    <button v-if="item.button">
      <component :is="item.button?.icon?.toString()" />
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SelectOption } from '../../types/_select'
import * as Icons from '../../icons/icons'

export default defineComponent({
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
  },
  setup() {
    const selectValue = () => {
      console.log('selectValue')
    }

    return {
      selectValue,
    }
  },
})
</script>

<style></style>
