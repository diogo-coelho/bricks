import { App, Plugin } from 'vue'
import BrIconLogoFacebook from './BrIconLogoFacebook.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFacebook.name, BrIconLogoFacebook)
  },
} as Plugin

export { BrIconLogoFacebook }
