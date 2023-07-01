import { App, Plugin } from 'vue'
import BrIconLogoEuro from './BrIconLogoEuro.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoEuro.name, BrIconLogoEuro)
  },
} as Plugin

export { BrIconLogoEuro }
