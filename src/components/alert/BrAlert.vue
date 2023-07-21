<template>
  <div
    ref="alert"
    :class="[
      ...rootClasses,
      {
        'fade-out': computedFadeOut && !hidden,
        'fade-in': computedFadeIn,
        hidden: hidden,
      },
    ]"
    :style="computedStyles"
  >
    <div class="message">
      <div v-if="computedIcon && !computedDisableIconsVisibility">
        <br-icon :name="computedIcon"></br-icon>
      </div>

      <div>
        <slot></slot>
      </div>
    </div>

    <button v-if="computedClosable" @click="closeAlert()">
      <br-icon name="br-icon-close"></br-icon>
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
import { AlertProps, ToastStyles } from '../../types/_alert'
import useToastStyle from '../../utils/useToastStyle'
import BrIcon from '../icon/BrIcon.vue'

export default defineComponent({
  name: 'BrAlert',
  components: {
    BrIcon,
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
      type: String,
      default: () => undefined,
      validator: (value: string) => {
        return !isNaN(parseInt(value))
      },
    },
  },
  setup(props: AlertProps) {
    const alert: Ref<HTMLDivElement | null> = ref(null)
    const timeout: Ref<NodeJS.Timeout | null> = ref(null)
    const fadeOut: Ref<boolean> = ref(false)
    const hidden: Ref<boolean> = ref(false)
    const isToast: Ref<boolean> = ref(false)
    const toastQueueStyles: ToastStyles = useToastStyle()

    const toastStyles: Ref<ToastStyles> = ref({
      filter: 'drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.15))',
      width: 'auto',
      maxWidth: '400px',
      marginBottom: '20px',
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
          return `br-icon-information-circle-outline`
        case 'neutral':
          return 'br-icon-settings-outline'
        case 'success':
          return 'br-icon-checkmark-circle-outline'
        case 'warning':
          return 'br-icon-warning-outline'
        case 'danger':
          return 'br-icon-alert-circle-outline'
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

    const closeAfterDuration = (): void => {
      timeout.value = setTimeout(
        () => closeAlert(),
        props.duration ? parseInt(props.duration) : 0
      )
    }

    const closeAlert = (): void => {
      fadeOut.value = true
      setTimeout(() => {
        hidden.value = true
        removeToast()
      }, 300)
      clearTimeout(timeout.value as NodeJS.Timeout)
    }

    const removeToast = (): void => {
      if (isToast.value) {
        isToast.value = false
        setTimeout(() => alert.value?.remove(), 200)
      }
    }

    const createToastQueueElement = (): void => {
      let container = document.querySelector(
        '.alert-toast-wrapper > .direction'
      )
      if (!container) {
        container = document.createElement('div')
        container.classList.add('alert-toast-wrapper')
        document.body.appendChild(container)

        let div = document.createElement('div')
        div.classList.add('direction')
        container.appendChild(div)
      }

      container.appendChild(alert.value as HTMLDivElement)
    }

    const setToastQueueStyles = (): void => {
      const container = document.querySelector(
        '.alert-toast-wrapper'
      ) as HTMLElement
      if (!container)
        throw new Error('Elemento container de toast não foi encontrado')
      container?.style.setProperty('top', toastQueueStyles.top || '')
      container?.style.setProperty('right', toastQueueStyles.right || '')
      container?.style.setProperty('bottom', toastQueueStyles.bottom || '')
      container?.style.setProperty('left', toastQueueStyles.left || '')

      const direction = container?.querySelector('.direction') as HTMLElement
      const isPositionedOnTop = typeof toastQueueStyles.top === 'string'
      direction?.style.setProperty(
        'flex-direction',
        isPositionedOnTop ? 'column-reverse' : 'column'
      )
    }

    const toast = (): void => {
      isToast.value = true
      createToastQueueElement()
      setToastQueueStyles()
      showAlert()
    }

    onMounted(() => {
      if (props.duration) hidden.value = true
    })

    return {
      alert,
      hidden,
      isToast,
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
    }
  },
})
</script>

<style></style>
