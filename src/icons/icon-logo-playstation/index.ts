import { App, Plugin } from 'vue'
import BrIconLogoPlaystation from './BrIconLogoPlaystation.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoPlaystation.name, BrIconLogoPlaystation)
  },
} as Plugin

export { BrIconLogoPlaystation }
