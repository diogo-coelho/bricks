<template>
  <div 
  	ref="modalRef"
  	class="br-modal"
	:class="{active}">
	<div class="modal-container" 
		:class="{
			'fade-out': computedFadeOut && active,
        	'fade-in': computedFadeIn,
			active
		}" 
		@click="closeModal">
		Isso é um modal
	</div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref } from "vue"
import { ModalProps } from '../../types/_modal'

export default defineComponent({
	setup(props: ModalProps) {
		const active: Ref<boolean> = ref(false)
		const fadeOut: Ref<boolean> = ref(false)
		const timeout: Ref<NodeJS.Timeout | null> = ref(null)

		const computedFadeOut: ComputedRef<boolean> = computed(() => fadeOut.value)
		const computedFadeIn: ComputedRef<boolean | undefined> = computed(() => !fadeOut.value)

		const openModal = ():void => {
			fadeOut.value = false
			active.value = true
		}

		const closeModal = (): void => {
			fadeOut.value = true
			setTimeout(() => {
				active.value = false
			}, 300)
			clearTimeout(timeout.value as NodeJS.Timeout)
		}

		return {
			active,
			computedFadeOut,
			computedFadeIn,
			openModal,
			closeModal,
		}
	}
})
</script>