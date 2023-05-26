export type SelectProps = {
  label?: string
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
