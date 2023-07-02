import { App, Plugin } from 'vue'
import BrIconLogoSass from './BrIconLogoSass.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSass.name, BrIconLogoSass)
  },
} as Plugin

export { BrIconLogoSass }
