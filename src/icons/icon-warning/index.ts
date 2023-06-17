import { App, Plugin } from 'vue'
import BrIconWarning from './BrIconWarning.vue'

export default {
  install(app: App) {
    app.component(BrIconWarning.name, BrIconWarning)
  },
} as Plugin

export { BrIconWarning }
