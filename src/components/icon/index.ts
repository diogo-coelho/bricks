import { App, Plugin } from 'vue'
import BrIcon from './BrIcon.vue'

export default {
  install(app: App) {
    app.component(BrIcon.name, BrIcon)
  },
} as Plugin

export { BrIcon }
