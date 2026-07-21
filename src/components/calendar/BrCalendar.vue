<template>
	<div class="br-calendar"> 
		<br-input 
			ref="brInputRef"
      type="text" 
      maxlength="10"
			class="calendar"
      name="datepicker"
			suffix="br-icon-calendar-outline"
			:current-value="selectedDate"
			@on-input="setInputValue"
			@on-click="toggleCalendarVisibility(!isCalendarActive)"
		/>

		<teleport to="body">
			<div
				ref="calendarRef"
				:selected-date="stringDate"
			>
			</div>
		</teleport>
	</div>
</template>

<script lang="ts">
import { Ref, defineComponent, onMounted, ref } from 'vue';
import BrInput from '../input/BrInput.vue'
import { formatDateToStringDate } from '../../utils/formatDate'

export default defineComponent({
	name: 'BrCalendar',
	components: {
		BrInput
	},
	setup () {
		const datepicker = ref<any>(null)
		const currentDate: string = new Date().toString()
		const stringDate: Ref<string | null> = ref(null)
		const selectedDate: Ref<string> = ref('')

		const calendarRef: Ref<HTMLElement | null> = ref(null)
		const brInputRef: Ref<HTMLElement | null> = ref(null)
		const calendarPositions = null

		const isCalendarActive: Ref<boolean> = ref(false)
		const typingTime: Ref<ReturnType<typeof setTimeout>| undefined> = ref(undefined)
		const TYPING_TIME_FINISHED: number = 750

		const toggleCalendarVisibility = (value: boolean): void => {
			isCalendarActive.value = value
			setCalendarPosition()
		}

		const setCalendarPosition = () => {
			const elementInput = brInputRef.value as HTMLElement;
			if (!elementInput) return
			const elementOffsets = elementInput.getBoundingClientRect()

		}

		const setInputValue = (value: string): void => {
			clearTimeout(typingTime.value)

			typingTime.value = setTimeout(() => {
				console.log('value', value)
				if (value === '') {
					clearCalendarValue()
					return
				}

				selectedDate.value = value

			}, TYPING_TIME_FINISHED)
		}

		const clearCalendarValue = () : void => {
			console.log('clearCalendarValue')
		}

		const getPrevArrowIcon = (): string => {
			return new URL('../../svgs/PrevArrowIcon.svg', import.meta.url).href
		}
		const getNextArrowIcon = (): string => {
			return new URL('@/svgs/NextArrowIcon.svg', import.meta.url).href
		}

		const setCalendarDate = async (): Promise<void> => {
			if (typeof window === 'undefined') return

			const elem = document.querySelector('.calendar') as HTMLElement
			if (!elem) return

			const { Datepicker } = await import('vanillajs-datepicker')
			const es = (await import('vanillajs-datepicker/locales/es')).default
			const ptBR = (await import('vanillajs-datepicker/locales/pt-BR')).default

			stringDate.value = formatDateToStringDate(currentDate)
			if (Datepicker.locales) Object.assign(Datepicker.locales, es, ptBR)

			datepicker.value = new Datepicker(elem, {
				format: 'dd/mm/yyyy',
				language: 'pt-BR',
				maxDate: stringDate.value,
				prevIcon: `<img src='${ getPrevArrowIcon() }' alt='prev-arrow-icon' />`,
				nextIcon: `<img src='${ getNextArrowIcon() }' alt='next-arrow-icon' />`
			})
		}

		onMounted(() => {
			void setCalendarDate()
		})

		return {
			stringDate,
			selectedDate,
			calendarRef,
			brInputRef,
			isCalendarActive,
			setInputValue,
			toggleCalendarVisibility,
		}
	}
})
</script>