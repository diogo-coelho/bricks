import { App, Plugin } from 'vue'
import BrIconLogoWindows from './BrIconLogoWindows.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoWindows.name, BrIconLogoWindows)
  },
} as Plugin

export { BrIconLogoWindows }
