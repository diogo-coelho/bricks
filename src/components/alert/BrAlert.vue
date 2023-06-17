<template>
  <div
    :class="[...rootClasses, { 'fade-out': computedFadeOut }]"
    :style="{ display: hidden ? 'none' : 'flex' }"
  >
    <div class="message">
      <div v-if="computedIcon">
        <component :is="computedIcon" />
      </div>

      <div>
        <slot></slot>
      </div>
    </div>

    <button v-if="computedClosable">
      <br-icon-clear @click="closeAlert()"></br-icon-clear>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, Ref, ref } from 'vue'
import { AlertProps } from '../../types/_alert'
import * as Icons from '../../icons/icons'

export default defineComponent({
  name: 'BrAlert',
  components: {
    ...Icons,
  },
  props: {
    /**
     * Set variant of alert
     * @values primary, success, neutral, warning, danger
     */
    variant: {
      type: String,
      default: () => 'primary',
      validator: (value: string) => {
        return (
          ['primary', 'neutral', 'success', 'warning', 'danger'].indexOf(
            value
          ) >= 0
        )
      },
    },
    /**
     * Define if alert is closable
     * @values true, false
     */
    closable: {
      type: Boolean,
    },
  },
  setup(props: AlertProps) {
    const fadeOut: Ref<boolean> = ref(false)
    const hidden: Ref<boolean> = ref(false)

    const computedFadeOut: ComputedRef<boolean> = computed(() => fadeOut.value)

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [`br-alert`, props.variant ? `br-alert--${props.variant}` : ``]
    })

    const computedIcon: ComputedRef<string | undefined> = computed(() => {
      switch (props.variant) {
        case 'primary':
          return `br-icon-info-outline`
        case 'neutral':
          return 'br-icon-settings'
        case 'success':
          return 'br-icon-check-circle-outline'
        case 'warning':
          return 'br-icon-warning'
        case 'danger':
          return 'br-icon-error-outline'
        default:
          return undefined
      }
    })

    const computedClosable: ComputedRef<boolean | undefined> = computed(() => {
      if (props.closable) return true
      return undefined
    })

    const closeAlert = (): void => {
      fadeOut.value = true
      setTimeout(() => (hidden.value = true), 300)
    }

    return {
      hidden,
      computedFadeOut,
      rootClasses,
      computedIcon,
      computedClosable,
      closeAlert,
    }
  },
})
</script>

<style></style>
