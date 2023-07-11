<template>
  <teleport v-if="active" to="body">
    <div class="br-modal" :class="{ active }">
      <div
        ref="modalRef"
        v-click-outside="handleClickOutside"
        tabIndex="1"
        class="modal-container"
        :class="{
          'fade-out': computedFadeOut && active,
          'fade-in': computedFadeIn,
          active,
        }"
        :style="{ width: computedCustomWidth ? customWidth : undefined }"
        @keyup.esc="closeModal"
      >
        <button v-if="!hideCloseButton" class="btn-close" @click="closeModal">
          <br-icon name="br-icon-close" />
        </button>
        <div v-if="computedFooterSlot" class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <div v-if="computedFooterSlot" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref, useSlots } from 'vue'
import { ModalProps } from '../../types/_modal'
import BrIcon from '../icon/BrIcon.vue'
import BrClickOutsideDirective from '../../directives/BrClickOutside/BrClickOutsideDirective'

export default defineComponent({
  name: 'BrModal',
  directives: {
    ClickOutside: BrClickOutsideDirective,
  },
  components: {
    BrIcon,
  },
  props: {
    /**
     * Set a custom width to modal container
     * @values string
     */
    customWidth: {
      type: String,
      default: () => undefined,
    },
    /**
     * Avoid closure of the when
     * user clicks on the overlay area
     * @values true, false
     */
    avoidCloseWhenOverlayIsClicked: {
      type: Boolean,
      default: () => false,
    },
    hideCloseButton: {
      /**
       * Hide default modal's close button
       * @values true, false
       */
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['on-closed'],
  setup(props: ModalProps, { emit }) {
    const modalRef: Ref<HTMLDivElement | null> = ref(null)
    const active: Ref<boolean> = ref(false)
    const fadeOut: Ref<boolean> = ref(false)
    const timeout: Ref<NodeJS.Timeout | null> = ref(null)
    const slots = useSlots()

    const computedFadeOut: ComputedRef<boolean> = computed(() => fadeOut.value)
    const computedFadeIn: ComputedRef<boolean | undefined> = computed(
      () => !fadeOut.value
    )

    const computedHeaderSlot: ComputedRef<boolean> = computed(
      () => !!slots.header
    )
    const computedFooterSlot: ComputedRef<boolean> = computed(
      () => !!slots.footer
    )

    const computedCustomWidth: ComputedRef<boolean | undefined> = computed(
      () => {
        if (props.customWidth) return true
        return undefined
      }
    )

    const computedOverflowDisabled = (): void => {
      const body = document.querySelector('body') as HTMLBodyElement
      if (active.value) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'auto'
      }
    }

    const toggleFocusOnModal = async (value: boolean): Promise<void> => {
      setTimeout(() => {
        value ? modalRef.value?.focus() : modalRef.value?.blur()
      }, 300)
      clearTimeout(timeout.value as NodeJS.Timeout)
    }

    const setModalClosureLockedAnimation = (): void => {
      modalRef.value?.classList.add('overlay-closure-locked')
      setTimeout(
        () => modalRef.value?.classList.remove('overlay-closure-locked'),
        300
      )
    }

    const handleClickOutside = (event: MouseEvent): void => {
      const element = document.querySelector('.br-modal') as HTMLDivElement
      if (element !== event.target) return
      if (props.avoidCloseWhenOverlayIsClicked) {
        console.log('entrou aqui')
        setModalClosureLockedAnimation()
        return
      }
      closeModal()
    }

    const openModal = async (): Promise<void> => {
      fadeOut.value = false
      active.value = true
      computedOverflowDisabled()
      await toggleFocusOnModal(true)
    }

    const closeModal = (): void => {
      fadeOut.value = true
      setTimeout(async () => {
        active.value = false
        computedOverflowDisabled()
        await toggleFocusOnModal(false)
        emit('on-closed')
      }, 300)
      clearTimeout(timeout.value as NodeJS.Timeout)
    }

    return {
      modalRef,
      active,
      computedFadeOut,
      computedFadeIn,
      computedFooterSlot,
      computedHeaderSlot,
      computedCustomWidth,
      openModal,
      closeModal,
      handleClickOutside,
    }
  },
})
</script>
