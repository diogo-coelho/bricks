import { ToastPositions, ToastStyles } from '../types/_alert'
import { reactive, readonly } from 'vue'

const toastQueueStyles: ToastStyles = reactive({
  top: '20px',
  right: '20px',
  left: undefined,
  bottom: undefined,
})

export const setToastPosition = (value: ToastPositions): void => {
  switch (value) {
    case 'top-right':
      toastQueueStyles.top = '20px'
      toastQueueStyles.right = '20px'
      toastQueueStyles.left = undefined
      toastQueueStyles.bottom = undefined
      break

    case 'bottom-right':
      toastQueueStyles.top = undefined
      toastQueueStyles.right = '20px'
      toastQueueStyles.left = undefined
      toastQueueStyles.bottom = '20px'
      break

    case 'top-left':
      toastQueueStyles.top = '20px'
      toastQueueStyles.right = undefined
      toastQueueStyles.left = '20px'
      toastQueueStyles.bottom = undefined
      break

    case 'bottom-left':
      toastQueueStyles.top = undefined
      toastQueueStyles.right = undefined
      toastQueueStyles.left = '20px'
      toastQueueStyles.bottom = '20px'
      break

    default:
      toastQueueStyles.top = '20px'
      toastQueueStyles.right = '20px'
      toastQueueStyles.left = undefined
      toastQueueStyles.bottom = undefined
  }
}

export default function useToastStyle(): ToastStyles {
  return readonly(toastQueueStyles)
}
