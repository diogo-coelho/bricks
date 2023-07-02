import { App, Plugin } from 'vue'
import BrIconLogoChrome from './BrIconLogoChrome.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoChrome.name, BrIconLogoChrome)
  },
} as Plugin

export { BrIconLogoChrome }
