import { App, Plugin } from 'vue'
import BrIconLogoYoutube from './BrIconLogoYoutube.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoYoutube.name, BrIconLogoYoutube)
  },
} as Plugin

export { BrIconLogoYoutube }
