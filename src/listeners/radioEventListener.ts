import { reactive, readonly } from 'vue'
import { RadioSelectedItem } from '../types/_radio'

const selectedRadio: RadioSelectedItem[] = reactive([])

/**
 * Verifica quantos elementos do tipo radio estão cadastrados no listener
 * @returns number - Quantidade de elementos do tipo radio registrados
 */
export function getRadioElementsLength(): number {
  return selectedRadio.length
}

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
  const radioElement = getRadioElement(radioItem.id)
  if (!radioElement) return
  radioElement.value = radioItem.value
  radioElement.checked = radioItem.checked
}

/**
 * Retorno os dados do elemento
 * @param id - id do elemento
 * @returns - dados do elemento
 */
export function getRadioElement(id: string): RadioSelectedItem | undefined {
  return selectedRadio.find((radio) => radio.id === id)
}

export default function useEventRadioListener() {
  return readonly(selectedRadio)
}
