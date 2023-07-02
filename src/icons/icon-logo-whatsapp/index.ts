import { App, Plugin } from 'vue'
import BrIconLogoWhatsapp from './BrIconLogoWhatsapp.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoWhatsapp.name, BrIconLogoWhatsapp)
  },
} as Plugin

export { BrIconLogoWhatsapp }
