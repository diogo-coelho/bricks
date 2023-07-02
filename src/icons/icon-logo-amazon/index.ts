import { App, Plugin } from 'vue'
import BrIconLogoAmazon from './BrIconLogoAmazon.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAmazon.name, BrIconLogoAmazon)
  },
} as Plugin

export { BrIconLogoAmazon }
