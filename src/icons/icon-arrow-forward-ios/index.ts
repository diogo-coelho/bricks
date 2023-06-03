import { App, Plugin } from 'vue'
import BrIconArrowFowardIos from './BrIconArrowFowardIos.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowFowardIos.name, BrIconArrowFowardIos)
  },
} as Plugin

export { BrIconArrowFowardIos }
