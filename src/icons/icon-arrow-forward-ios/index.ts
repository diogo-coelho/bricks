import { App, Plugin } from 'vue'
import BrIconArrowForwardIos from './BrIconArrowForwardIos.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowForwardIos.name, BrIconArrowForwardIos)
  },
} as Plugin

export { BrIconArrowForwardIos }
