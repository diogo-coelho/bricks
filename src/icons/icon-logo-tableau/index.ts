import { App, Plugin } from 'vue'
import BrIconLogoTableau from './BrIconLogoTableau.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTableau.name, BrIconLogoTableau)
  },
} as Plugin

export { BrIconLogoTableau }
