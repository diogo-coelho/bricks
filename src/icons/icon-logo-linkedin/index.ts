import { App, Plugin } from 'vue'
import BrIconLogoLinkedin from './BrIconLogoLinkedin.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoLinkedin.name, BrIconLogoLinkedin)
  },
} as Plugin

export { BrIconLogoLinkedin }
