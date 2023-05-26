export type SelectProps = {
  label?: string
  disabled?: boolean
  size?: string
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
  button?: {
    label?: string
    icon?: string
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    callback: (data?: T) => any
  }
}
