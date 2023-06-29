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
        <button class="btn-close" @click="closeModal">
          <br-icon-clear></br-icon-clear>
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
import * as Icons from '../../icons/icons'
import BrClickOutsideDirective from '../../directives/BrClickOutside/BrClickOutsideDirective'

export default defineComponent({
  name: 'BrModal',
  directives: {
    ClickOutside: BrClickOutsideDirective,
  },
  components: {
    ...Icons,
  },
  props: {
    customWidth: {
      type: String,
      default: () => undefined,
    },
  },
  setup(props: ModalProps) {
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

    const handleClickOutside = (event: MouseEvent): void => {
      const element = document.querySelector('.br-modal') as HTMLDivElement
      if (element === event.target) closeModal()
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
