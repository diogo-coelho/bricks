import { App, Plugin } from 'vue'
import BrIconArrowForward from './BrIconArrowForward.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowForward.name, BrIconArrowForward)
  },
} as Plugin

export { BrIconArrowForward }
