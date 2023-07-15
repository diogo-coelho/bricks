import { reactive, readonly } from 'vue'
import { RadioSelectedItem } from '../types/_radio'

const selectedRadio: RadioSelectedItem[] = reactive([])

/**
 * Adiciona um novo elemento radio que foi criado pelo componente
 * RadioGroup. Através dele serão feitos os controles das opções, usando
 * como referência o seu identificador
 * @param id
 * @returns void
 */
export function addRadioElement(id: string): void {
  selectedRadio.push({ id, value: '', checked: false })
}

/**
 * Encontra o objeto que representa o elemento radio e atualiza
 * o valor selecionado
 * @param radioItem
 * @returns void
 */
export function setSelectedRadio(radioItem: RadioSelectedItem): void {
  const radioElement = selectedRadio.find((radio) => radio.id === radioItem.id)
  if (!radioElement) return
  radioElement.value = radioItem.value
  radioElement.checked = radioItem.checked
}

export default function useEventRadioListener() {
  return readonly(selectedRadio)
}
