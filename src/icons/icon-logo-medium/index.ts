import { App, Plugin } from 'vue'
import BrIconLogoMedium from './BrIconLogoMedium.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoMedium.name, BrIconLogoMedium)
  },
} as Plugin

export { BrIconLogoMedium }
