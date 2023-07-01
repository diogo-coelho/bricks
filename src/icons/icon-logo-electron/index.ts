import { App, Plugin } from 'vue'
import BrIconLogoElectron from './BrIconLogoElectron.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoElectron.name, BrIconLogoElectron)
  },
} as Plugin

export { BrIconLogoElectron }
