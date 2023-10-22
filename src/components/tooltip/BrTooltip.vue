<template>
  <div class="br-tooltip-container">
    <div
      ref="tooltipElementRef"
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
      ref="elementTriggerRef"
      class="br-tooltip-trigger"
      @mouseover="setIsVisible(true)"
      @mouseleave="setIsVisible(false)"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, onMounted, ref, watch } from 'vue'
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
    const tooltipElementRef: Ref<HTMLElement | null> = ref(null)
    const elementTriggerRef: Ref<HTMLElement | null> = ref(null)
    const isVisible: Ref<boolean> = ref(false)

    const setIsVisible = (value: boolean): void => {
      isVisible.value = value
    }

    const getTooltipTriggerDomRect = (): DOMRect | void => {
      const element = elementTriggerRef.value as HTMLElement
      if (!element) return
      return element.getBoundingClientRect()
    }

    const getTooltipElementDomRect = (): DOMRect | void => {
      const element = tooltipElementRef.value as HTMLElement
      if (!element) return
      return element.getBoundingClientRect()
    }

    const setPositionOfElementOnTop = (
      positions: DOMRect,
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        bottom: Math.abs(positions.bottom - positions.top) + 5,
        left: Math.round((positions.width - tooltipDomRect.width * 2) / 2),
      }
    }

    const setPositionOfElementOnTopStart = (
      positions: DOMRect
    ): TooltipPosition => {
      return {
        bottom: Math.abs(positions.bottom - positions.top) + 5,
        left: 0,
      }
    }

    const setPositionOfElementOnTopEnd = (
      positions: DOMRect
    ): TooltipPosition => {
      return {
        bottom: Math.abs(positions.bottom - positions.top) + 5,
        right: 0,
      }
    }

    const setPositionOfElementOnBottom = (
      positions: DOMRect,
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        top: Math.abs(positions.bottom - positions.top) + 5,
        left: Math.round((positions.width - tooltipDomRect.width * 2) / 2),
      }
    }

    const setPositionOfElementOnBottomStart = (
      positions: DOMRect
    ): TooltipPosition => {
      return {
        top: Math.abs(positions.bottom - positions.top) + 5,
        left: 0,
      }
    }

    const setPositionOfElementOnBottomEnd = (
      positions: DOMRect
    ): TooltipPosition => {
      return {
        top: Math.abs(positions.bottom - positions.top) + 5,
        right: 0,
      }
    }

    const setPositionOfElementOnLeft = (
      positions: DOMRect,
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      console.log('positions', positions)
      return {
        left: -Math.round(tooltipDomRect.width * 2 + 5),
        top: Math.round((positions.height - tooltipDomRect.height * 2) / 2),
      }
    }

    const setPositionOfElementOnLeftStart = (
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        left: -Math.round(tooltipDomRect.width * 2 + 5),
        top: 0,
      }
    }

    const setPositionOfElementOnLeftEnd = (
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        left: -Math.round(tooltipDomRect.width * 2 + 5),
        bottom: 0,
      }
    }

    const setPositionOfElementOnRight = (
      positions: DOMRect,
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        right: -Math.round(tooltipDomRect.width * 2 + 5),
        top: Math.round((positions.height - tooltipDomRect.height * 2) / 2),
      }
    }

    const setPositionOfElementOnRightStart = (
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        right: -Math.round(tooltipDomRect.width * 2 + 5),
        top: 0,
      }
    }

    const setPositionOfElementOnRightEnd = (
      tooltipDomRect: DOMRect
    ): TooltipPosition => {
      return {
        right: -Math.round(tooltipDomRect.width * 2 + 5),
        bottom: 0,
      }
    }

    const setTooltipPosition = () => {
      setTimeout(() => {
        const positions = getTooltipTriggerDomRect()
        const tooltipDomRect = getTooltipElementDomRect()
        if (!positions || !tooltipDomRect) return

        switch (props.placement) {
          case 'top':
            tooltipPosition.value = setPositionOfElementOnTop(
              positions,
              tooltipDomRect
            )
            break

          case 'top-start':
            tooltipPosition.value = setPositionOfElementOnTopStart(positions)
            break

          case 'top-end':
            tooltipPosition.value = setPositionOfElementOnTopEnd(positions)
            break

          case 'bottom':
            tooltipPosition.value = setPositionOfElementOnBottom(
              positions,
              tooltipDomRect
            )
            break

          case 'bottom-start':
            tooltipPosition.value = setPositionOfElementOnBottomStart(positions)
            break

          case 'bottom-end':
            tooltipPosition.value = setPositionOfElementOnBottomEnd(positions)
            break

          case 'left':
            tooltipPosition.value = setPositionOfElementOnLeft(
              positions,
              tooltipDomRect
            )
            break

          case 'left-start':
            tooltipPosition.value =
              setPositionOfElementOnLeftStart(tooltipDomRect)
            break

          case 'left-end':
            tooltipPosition.value =
              setPositionOfElementOnLeftEnd(tooltipDomRect)
            break

          case 'right':
            tooltipPosition.value = setPositionOfElementOnRight(
              positions,
              tooltipDomRect
            )
            break

          case 'right-start':
            tooltipPosition.value =
              setPositionOfElementOnRightStart(tooltipDomRect)
            break

          case 'right-end':
            tooltipPosition.value =
              setPositionOfElementOnRightEnd(tooltipDomRect)
            break
        }
      }, 200)
    }

    watch(
      () => props.content,
      async () => {
        await setTooltipPosition()
      }
    )

	watch(
      () => props.placement,
      async () => {
        await setTooltipPosition()
      }
    )

    onMounted(async () => {
      await setTooltipPosition()
    })

    return {
      tooltipPosition,
      arrowTooltipPosition,
      tooltipElementRef,
      elementTriggerRef,
      isVisible,
      setIsVisible,
    }
  },
})
</script>
