export type SelectProps = {
  label?: string
}

export type SelectOption = {
  value: string
  label: string
  button?: {
    label?: string
    icon?: string
    callback: (data?: T) => any
  }
}
