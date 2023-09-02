export type SelectProps = {
  label?: string
  disabled?: boolean
  size?: string
  selected?: string
  pill?: boolean
}

export type DropdownElementPosition = {
  top?: number
  left?: number
  bottom?: number
  right?: number
}

export type SelectOption = {
  value: string
  label: string
}

export type SelectItemProps = {
  value: string
  button?: SelectItemButton
}

export type SelectItemButton = {
  label?: string
  icon?: string
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  callback: (data?: T) => any
}

export type SelectInputSelected = {
  id: string
  value: string
}

export type SelectProvidedAttributes = {
  id?: ComputedRef<string>
  selected?: ComputedRef<SelectedOption>
  initialSelected?: string
  emitValue: (value: SelectOption) => boolean
}
