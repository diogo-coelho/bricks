import { ComputedRef } from 'vue'

export type RadioGroupProps = {
  name: string
  label?: string
  value?: string
  size?: string
}

export type RadioProps = {
  value: string
  disabled?: boolean
}

export type RadioProvidedAttributes = {
  name: string
  id?: ComputedRef<string>
  emitValue: (value: string) => boolean
}

export type RadioSelectedItem = {
  id: string
  value: string
  checked: boolean
}
