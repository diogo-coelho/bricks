import { App, Plugin } from 'vue'
import BrIconLogoTwitch from './BrIconLogoTwitch.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTwitch.name, BrIconLogoTwitch)
  },
} as Plugin

export { BrIconLogoTwitch }
