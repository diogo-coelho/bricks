import { App, Plugin } from 'vue'
import BrIconLogoXing from './BrIconLogoXing.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoXing.name, BrIconLogoXing)
  },
} as Plugin

export { BrIconLogoXing }
