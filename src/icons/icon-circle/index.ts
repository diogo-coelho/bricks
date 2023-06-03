import { App, Plugin } from 'vue'
import BrIconCircle from './BrIconCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconCircle.name, BrIconCircle)
  },
} as Plugin

export { BrIconCircle }
