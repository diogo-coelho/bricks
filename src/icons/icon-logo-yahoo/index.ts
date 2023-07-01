import { App, Plugin } from 'vue'
import BrIconLogoYahoo from './BrIconLogoYahoo.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoYahoo.name, BrIconLogoYahoo)
  },
} as Plugin

export { BrIconLogoYahoo }
