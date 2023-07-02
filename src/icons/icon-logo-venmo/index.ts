import { App, Plugin } from 'vue'
import BrIconLogoVenmo from './BrIconLogoVenmo.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoVenmo.name, BrIconLogoVenmo)
  },
} as Plugin

export { BrIconLogoVenmo }
