import { App, Plugin } from 'vue'
import BrCheckbox from './BrCheckbox.vue'

export default {
  install(app: App) {
    app.component(BrCheckbox.name, BrCheckbox)
  },
} as Plugin

export { BrCheckbox }
