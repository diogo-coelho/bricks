import { App, Plugin } from 'vue'
import BrIconLogoTiktok from './BrIconLogoTiktok.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTiktok.name, BrIconLogoTiktok)
  },
} as Plugin

export { BrIconLogoTiktok }
