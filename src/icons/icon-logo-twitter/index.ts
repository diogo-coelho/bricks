import { App, Plugin } from 'vue'
import BrIconLogoTwitter from './BrIconLogoTwitter.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTwitter.name, BrIconLogoTwitter)
  },
} as Plugin

export { BrIconLogoTwitter }
