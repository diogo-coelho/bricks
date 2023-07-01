import { App, Plugin } from 'vue'
import BrIconLogoGooglePlaystore from './BrIconLogoGooglePlaystore.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoGooglePlaystore.name, BrIconLogoGooglePlaystore)
  },
} as Plugin

export { BrIconLogoGooglePlaystore }
