import { reactive, readonly } from 'vue'
import { SelectInputSelected } from '../types/_select'

const selectInputSelected: SelectInputSelected[] = reactive([])

/**
 * Verifica quantos elementos do tipo select estão cadastrados no listener
 * @returns number - Quantidade de elementos do tipo select registrados
 */
export function getSelectInputElementsLength(): number {
  return selectInputSelected.length
}

/**
 * Adiciona um novo elemento select que foi criado pelo componente
 * Select. Através dele serão feitos os controles das opções, usando
 * como referência o seu identificador
 * @param id
 * @returns void
 */
export function addSelectElement(id: string): void {
  selectInputSelected.push({ id, value: '' })
}

/**
 * Encontra o objeto que representa o elemento select e atualiza
 * o valor selecionado
 * @param selectInput
 * @returns void
 */
export function setSelectedSelectInput(selectInput: SelectInputSelected): void {
  const selectElement = getSelectInputElement(selectInput.id)
  if (!selectElement) return
  selectElement.value = selectInput.value
}

/**
 * Retorno os dados do elemento
 * @param id - id do elemento
 * @returns - dados do elemento
 */
export function getSelectInputElement(
  id: string
): SelectInputSelected | undefined {
  return selectInputSelected.find((select) => select.id === id)
}

export default function useEventRadioListener() {
  return readonly(selectInputSelected)
}
