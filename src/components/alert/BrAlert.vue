<template>
  <div
    :class="[
      ...rootClasses,
      {
        'fade-out': computedFadeOut,
        'fade-in': computedFadeIn,
        visibility: hidden,
      },
    ]"
    :style="computedStyles"
  >
    <div class="message">
      <div v-if="computedIcon && !computedDisableIconsVisibility">
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
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  Ref,
  ref,
  StyleValue,
} from 'vue'
import { AlertProps, ToastStyles, ToastPositions } from '../../types/_alert'
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
    /**
     * Define if alert shows icons
     */
    noIcons: {
      type: Boolean,
      default: () => false,
    },
    /**
     * Set a duration to show alert
     * @values number
     */
    duration: {
      type: Number,
      default: () => undefined,
    },
  },
  setup(props: AlertProps) {
    const timeout: Ref<NodeJS.Timeout | null> = ref(null)
    const fadeOut: Ref<boolean> = ref(false)
    const hidden: Ref<boolean> = ref(false)
    const isToast: Ref<boolean> = ref(false)
    const toastStyles: Ref<ToastStyles> = ref({
      position: 'fixed',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.12)',
      top: '20px',
      right: '20px',
      left: undefined,
      bottom: undefined,
      width: '400px',
      zIndex: 50,
    })

    const computedFadeOut: ComputedRef<boolean> = computed(() => fadeOut.value)
    const computedFadeIn: ComputedRef<boolean | undefined> = computed(() => {
      if (props.duration) return !fadeOut.value
      return undefined
    })

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [`br-alert`, props.variant ? `br-alert--${props.variant}` : ``]
    })

    const computedStyles: ComputedRef<StyleValue | undefined> = computed(() => {
      if (isToast.value)
        return {
          display: hidden.value ? 'none' : 'flex',
          ...toastStyles.value,
        }
      return { display: hidden.value ? 'none' : 'flex' }
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

    const computedDisableIconsVisibility: ComputedRef<boolean | undefined> =
      computed(() => {
        if (props.noIcons) return true
        return undefined
      })

    const showAlert = (): void => {
      fadeOut.value = false
      hidden.value = false
      closeAfterDuration()
    }

    const closeAlert = (): void => {
      fadeOut.value = true
      setTimeout(() => (hidden.value = true), 300)
      clearTimeout(timeout.value as NodeJS.Timeout)
    }

    const toast = (): void => {
      isToast.value = true
      showAlert()
    }

    const setToastPosition = (value: ToastPositions): void => {
      switch (value) {
        case 'top-right':
          toastStyles.value.top = '20px'
          toastStyles.value.right = '20px'
          toastStyles.value.left = undefined
          toastStyles.value.bottom = undefined
          break

        case 'bottom-right':
          toastStyles.value.top = undefined
          toastStyles.value.right = '20px'
          toastStyles.value.left = undefined
          toastStyles.value.bottom = '20px'
          break

        case 'top-left':
          toastStyles.value.top = '20px'
          toastStyles.value.right = undefined
          toastStyles.value.left = '20px'
          toastStyles.value.bottom = undefined
          break

        case 'bottom-left':
          toastStyles.value.top = undefined
          toastStyles.value.right = undefined
          toastStyles.value.left = '20px'
          toastStyles.value.bottom = '20px'
          break

        default:
          toastStyles.value.top = '20px'
          toastStyles.value.right = '20px'
          toastStyles.value.left = undefined
          toastStyles.value.bottom = undefined
      }
    }

    const closeAfterDuration = (): void => {
      timeout.value = setTimeout(() => closeAlert(), props.duration)
    }

    onMounted(() => {
      if (props.duration) hidden.value = true
    })

    return {
      hidden,
      computedFadeOut,
      computedFadeIn,
      rootClasses,
      computedIcon,
      computedClosable,
      computedDisableIconsVisibility,
      computedStyles,
      closeAlert,
      showAlert,
      toast,
      setToastPosition,
    }
  },
})
</script>

<style></style>
