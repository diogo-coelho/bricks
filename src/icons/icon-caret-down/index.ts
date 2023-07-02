import { App, Plugin } from 'vue'
import BrIconCaretDownOutline from './BrIconCaretDownOutline.vue'
import BrIconCaretDownSharp from './BrIconCaretDownSharp.vue'
import BrIconCaretDown from './BrIconCaretDown.vue'

export default {
  install(app: App) {
    app.component(BrIconCaretDownOutline.name, BrIconCaretDownOutline)
    app.component(BrIconCaretDownSharp.name, BrIconCaretDownSharp)
    app.component(BrIconCaretDown.name, BrIconCaretDown)
  },
} as Plugin

export { BrIconCaretDownOutline, BrIconCaretDownSharp, BrIconCaretDown }
