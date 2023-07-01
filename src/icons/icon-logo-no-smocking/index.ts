import { App, Plugin } from 'vue'
import BrIconLogoNoSmoking from './BrIconLogoNoSmoking.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoNoSmoking.name, BrIconLogoNoSmoking)
  },
} as Plugin

export { BrIconLogoNoSmoking }
