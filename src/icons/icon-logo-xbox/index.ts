import { App, Plugin } from 'vue'
import BrIconLogoXbox from './BrIconLogoXbox.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoXbox.name, BrIconLogoXbox)
  },
} as Plugin

export { BrIconLogoXbox }
