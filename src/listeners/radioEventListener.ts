import { reactive, readonly, toRefs } from 'vue'
import { RadioSelectedItem } from '../types/_radio'

const selectedRadio: RadioSelectedItem = reactive({
	value: '',
	checked: false
})

export function setSelectedRadio (radioItem: RadioSelectedItem): void {
	selectedRadio.value = radioItem.value
	selectedRadio.checked = radioItem.checked
}

export default function useEventRadioListener () {
	return readonly(selectedRadio)
}