import { App, Plugin } from 'vue'
import BrIconLogoFlickr from './BrIconLogoFlickr.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFlickr.name, BrIconLogoFlickr)
  },
} as Plugin

export { BrIconLogoFlickr }
