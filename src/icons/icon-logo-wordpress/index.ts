import { App, Plugin } from 'vue'
import BrIconLogoWordpress from './BrIconLogoWordpress.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoWordpress.name, BrIconLogoWordpress)
  },
} as Plugin

export { BrIconLogoWordpress }
