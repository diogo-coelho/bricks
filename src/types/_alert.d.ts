import { PositionProperty } from 'vue'

export type AlertProps = {
  variant?: string
  closable?: boolean
  noIcons?: boolean
  duration?: string
}

export type ToastStyles = {
  position?: PositionProperty
  top?: string
  left?: string
  right?: string
  bottom?: string
  boxShadow?: string
  width?: string
  minWidth?: string
  zIndex?: number
  marginBottom?: string
}

export type ToastPositions =
  | 'top-right'
  | 'bottom-right'
  | 'top-left'
  | 'bottom-left'
