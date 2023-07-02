import { App, Plugin } from 'vue'
import BrIconLogoAngular from './BrIconLogoAngular.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAngular.name, BrIconLogoAngular)
  },
} as Plugin

export { BrIconLogoAngular }
