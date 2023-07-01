import { App, Plugin } from 'vue'
import BrIconLogoFirefox from './BrIconLogoFirefox.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFirefox.name, BrIconLogoFirefox)
  },
} as Plugin

export { BrIconLogoFirefox }
