<template>
  <div ref="badgeRef" class="br-badge" :class="rootClasses">
    <div
      v-if="computedPulse"
      :class="{ pulse: computedPulse }"
      :style="{
        width: computedWidth + 'px',
        height: computedHeight + 'px',
      }"
    ></div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import { BadgeProps } from '../../types/_badge'

export default defineComponent({
  name: 'BrBadge',
  props: {
    /**
     * Color of button
     * @values primary, neutral, success, warning, danger
     */
    variant: {
      type: String,
      default: () => undefined,
      validator: (value: string) => {
        return ['primary', 'neutral', 'success', 'warning', 'danger'].includes(
          value
        )
      },
    },
    /**
     * pill button
     * @values true, false
     */
    pill: {
      type: Boolean,
    },
    /**
     * Set pulse
     * @values true, false
     */
    pulse: {
      type: Boolean,
    },
  },
  setup(props: BadgeProps) {
    const badgeRef = ref(null)

    const computedWidth: ComputedRef<number> = computed(() => {
      console.log(badgeRef.value as unknown as HTMLDivElement)
      return (badgeRef.value as unknown as HTMLDivElement)?.offsetWidth
    })

    const computedHeight: ComputedRef<number> = computed(() => {
      console.log(badgeRef.value as unknown as HTMLDivElement)
      return (badgeRef.value as unknown as HTMLDivElement)?.offsetHeight
    })

    const computedPill: ComputedRef<boolean | undefined> = computed(() => {
      if (props.pill) return true
      return undefined
    })

    const computedPulse: ComputedRef<boolean | undefined> = computed(() => {
      if (props.pulse) return true
      return undefined
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        props.variant ? `br-badge--${props.variant}` : ``,
        computedPill.value ? `br-badge--pill` : ``,
      ]
    })

    return {
      badgeRef,
      rootClasses,
      computedPulse,
      computedWidth,
      computedHeight,
    }
  },
})
</script>

<style></style>
