import { ButtonHTMLAttributes } from 'vue'

export type ButtonProps = {
  disabled?: boolean
  variant?: string
  type?: ButtonHTMLAttributes['type']
  size?: string
  pill?: boolean
  outline?: boolean
  text?: boolean
  link?: ButtonLink
  prefix?: string
  suffix?: string
}

export type ButtonLink = {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  download?: string
}
