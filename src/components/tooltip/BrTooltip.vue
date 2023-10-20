<template>
  <div class="br-tooltip-container">
    <div
      class="br-tooltip"
      :class="{ visible: isVisible }"
      :style="{
        top: tooltipPosition?.top + 'px' || undefined,
        bottom: tooltipPosition?.bottom + 'px' || undefined,
        left: tooltipPosition?.left + 'px' || undefined,
        right: tooltipPosition?.right + 'px' || undefined,
      }"
    >
      <span>{{ content }}</span>
      <span class="br-tooltip-arrow" :class="placement"></span>
    </div>

    <div
      class="br-tooltip-trigger"
      @mouseover="setIsVisible(true)"
      @mouseleave="setIsVisible(false)"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, onMounted, ref } from 'vue'
import { TooltipPosition, TooltipProps } from '../../types/_tooltip'

export default defineComponent({
  name: 'BrTooltip',
  props: {
    /**
     * Content of tooltip
     */
    content: {
      type: String,
      default: () => '',
    },
    /**
     * Placement of tooltip
     * @values [top, top-start, top-end, left, left-start, left-end,right, right-start, right-end, bottom, bottom-start, bottom-end]
     */
    placement: {
      type: String,
      default: 'top',
      validator: (value: string) => {
        return [
          'top',
          'top-start',
          'top-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
        ].includes(value)
      },
    },
  },
  setup(props: TooltipProps) {
    const tooltipPosition: Ref<TooltipPosition | null> = ref(null)
    const arrowTooltipPosition: Ref<TooltipPosition | null> = ref(null)
    const isVisible: Ref<boolean> = ref(false)

    const setIsVisible = (value: boolean): void => {
      isVisible.value = value
    }

    const getTooltipTriggerDomRect = (): DOMRect | void => {
      const element = document.querySelector(
        '.br-tooltip-trigger'
      ) as HTMLElement
      if (!element) return
      return element.getBoundingClientRect()
    }

    const getTooltipElementDomRect = (): DOMRect | void => {
      const element = document.querySelector('.br-tooltip') as HTMLElement
      if (!element) return
      return element.getBoundingClientRect()
    }

    const setPositionOfElementOnTop = (
      positions: DOMRect,
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        bottom: Math.abs(positions.bottom - positions.top) + 5,
        left: Math.ceil(positions.width / 2 - tooltipDomRect.width / 2),
      }
    }

    const setTooltipPosition = () => {
      const positions = getTooltipTriggerDomRect()
      const tooltipDomRect = getTooltipElementDomRect()
      if (!positions || !tooltipDomRect) return
      console.log('positions', positions)

      switch (props.placement) {
        case 'top':
          tooltipPosition.value = setPositionOfElementOnTop(
            positions,
            tooltipDomRect
          )
          break
      }
    }

    onMounted(() => {
      setTooltipPosition()
    })

    return {
      tooltipPosition,
      arrowTooltipPosition,
      isVisible,
      setIsVisible,
    }
  },
})
</script>
