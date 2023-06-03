import { App, Plugin } from 'vue'
import BrIconKeyboardArrowRight from './BrIconKeyboardArrowRight.vue'

export default {
  install(app: App) {
    app.component(BrIconKeyboardArrowRight.name, BrIconKeyboardArrowRight)
  },
} as Plugin

export { BrIconKeyboardArrowRight }
