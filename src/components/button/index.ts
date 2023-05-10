import { App, Plugin } from 'vue'
import BrButton from './BrButton.vue'

export default {
  install(app: App) {
    app.component(BrButton.name, BrButton)
  },
} as Plugin

export { BrButton }
