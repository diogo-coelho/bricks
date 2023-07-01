import { App, Plugin } from 'vue'
import BrIconLogoCapacitor from './BrIconLogoCapacitor.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoCapacitor.name, BrIconLogoCapacitor)
  },
} as Plugin

export { BrIconLogoCapacitor }
