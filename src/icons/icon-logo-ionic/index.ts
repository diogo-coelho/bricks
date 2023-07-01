import { App, Plugin } from 'vue'
import BrIconLogoIonic from './BrIconLogoIonic.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoIonic.name, BrIconLogoIonic)
  },
} as Plugin

export { BrIconLogoIonic }
