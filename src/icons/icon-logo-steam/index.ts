import { App, Plugin } from 'vue'
import BrIconLogoSteam from './BrIconLogoSteam.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSteam.name, BrIconLogoSteam)
  },
} as Plugin

export { BrIconLogoSteam }
