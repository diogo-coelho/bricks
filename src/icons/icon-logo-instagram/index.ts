import { App, Plugin } from 'vue'
import BrIconLogoInstagram from './BrIconLogoInstagram.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoInstagram.name, BrIconLogoInstagram)
  },
} as Plugin

export { BrIconLogoInstagram }
