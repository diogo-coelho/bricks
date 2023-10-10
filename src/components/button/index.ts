import { App, Plugin } from 'vue'
import BrButton from './BrButton.vue'
import BrIconButton from './BrButtonIcon.vue'

export default {
  install(app: App) {
    app.component(BrButton.name, BrButton)
    app.component(BrIconButton.name, BrIconButton)
  },
} as Plugin

export { BrButton, BrIconButton }
