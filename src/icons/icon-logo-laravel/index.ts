import { App, Plugin } from 'vue'
import BrIconLogoLaravel from './BrIconLogoLaravel.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoLaravel.name, BrIconLogoLaravel)
  },
} as Plugin

export { BrIconLogoLaravel }
