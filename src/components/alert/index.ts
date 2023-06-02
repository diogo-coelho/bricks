import { App, Plugin } from 'vue'
import BrAlert from './BrAlert.vue'

export default {
  install(app: App) {
    app.component(BrAlert.name, BrAlert)
  },
} as Plugin

export { BrAlert }
