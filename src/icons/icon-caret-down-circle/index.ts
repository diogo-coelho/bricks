import { App, Plugin } from 'vue'
import BrIconCaretDownCircleOutline from './BrIconCaretDownCircleOutline.vue'
import BrIconCaretDownCircleSharp from './BrIconCaretDownCircleSharp.vue'
import BrIconCaretDownCircle from './BrIconCaretDownCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconCaretDownCircleOutline.name,
      BrIconCaretDownCircleOutline
    )
    app.component(BrIconCaretDownCircleSharp.name, BrIconCaretDownCircleSharp)
    app.component(BrIconCaretDownCircle.name, BrIconCaretDownCircle)
  },
} as Plugin

export {
  BrIconCaretDownCircleOutline,
  BrIconCaretDownCircleSharp,
  BrIconCaretDownCircle,
}
