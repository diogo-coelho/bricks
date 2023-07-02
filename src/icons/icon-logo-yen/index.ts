import { App, Plugin } from 'vue'
import BrIconLogoYen from './BrIconLogoYen.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoYen.name, BrIconLogoYen)
  },
} as Plugin

export { BrIconLogoYen }
