import { App, Plugin } from 'vue'
import BrIconLogoAppleAr from './BrIconLogoAppleAr.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAppleAr.name, BrIconLogoAppleAr)
  },
} as Plugin

export { BrIconLogoAppleAr }
