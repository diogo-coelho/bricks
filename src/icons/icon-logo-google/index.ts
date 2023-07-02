import { App, Plugin } from 'vue'
import BrIconLogoGoogle from './BrIconLogoGoogle.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoGoogle.name, BrIconLogoGoogle)
  },
} as Plugin

export { BrIconLogoGoogle }
