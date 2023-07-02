<template>
  <nav class="br-breadcrumb">
    <ol>
      <li
        v-for="(item, i) in items"
        :key="`br-breadcrumb-item-${i}`"
        class="br-breadcrumb-item"
        :item="item"
      >
        <a :href="item.href ? item.href : 'javascript:void(0)'">
          {{ item.text }}
        </a>
        <br-icon
          :name="computedSeparator"
          v-if="isNotLastBreadcrumb(items.length, i)"
        />
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType } from 'vue'
import { BreadcrumbItem, BreadcrumbProps } from '../../types/_breadcrumb'
import BrIcon from '../icon/BrIcon.vue'

export default defineComponent({
  name: 'BrBreadcrumb',
  components: {
    BrIcon,
  },
  props: {
    /**
     * Breadcrumb items
     * @values BreadcrumbItems
     */
    items: {
      type: Object as PropType<BreadcrumbItem[]>,
      required: true,
    },
    /**
     * Custom separator
     * @values string
     */
    customSeparator: {
      type: String,
      default: () => undefined,
    },
  },
  setup(props: BreadcrumbProps) {
    const computedSeparator: ComputedRef<string> = computed(() => {
      return props.customSeparator
        ? props.customSeparator
        : 'br-icon-chevron-forward'
    })

    const isNotLastBreadcrumb = (
      itemsLength: number,
      index: number
    ): boolean => {
      return itemsLength - 1 !== index
    }

    return {
      computedSeparator,
      isNotLastBreadcrumb,
    }
  },
})
</script>
