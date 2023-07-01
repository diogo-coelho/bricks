import { App, Plugin } from 'vue'
import BrIconLogoDiscord from './BrIconLogoDiscord.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDiscord.name, BrIconLogoDiscord)
  },
} as Plugin

export { BrIconLogoDiscord }
