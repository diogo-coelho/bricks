import { App, Plugin } from 'vue'
import BrIconLogoMastodon from './BrIconLogoMastodon.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoMastodon.name, BrIconLogoMastodon)
  },
} as Plugin

export { BrIconLogoMastodon }
