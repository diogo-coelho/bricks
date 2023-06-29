import { App, Plugin } from 'vue'
import BrModal from './BrModal.vue'

export default {
  install(app: App) {
    app.component(BrModal.name, BrModal)
  },
} as Plugin

export { BrModal }
