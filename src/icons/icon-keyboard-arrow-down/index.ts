import { App, Plugin } from 'vue'
import BrIconKeyboardArrowDown from './BrIconKeyboardArrowDown.vue'

export default {
  install(app: App) {
    app.component(BrIconKeyboardArrowDown.name, BrIconKeyboardArrowDown)
  },
} as Plugin

export { BrIconKeyboardArrowDown }
