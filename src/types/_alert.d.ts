export type AlertProps = {
  variant?: string
  closable?: boolean
  noIcons?: boolean
  duration?: number
}

export type ToastStyles = {
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  boxShadow?: string
  width?: string
  zIndex?: number
}

export type ToastPositions =
  | 'top-right'
  | 'bottom-right'
  | 'top-left'
  | 'bottom-left'
