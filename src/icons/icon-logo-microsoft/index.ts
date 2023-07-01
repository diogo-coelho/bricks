import { App, Plugin } from 'vue'
import BrIconLogoMicrosoft from './BrIconLogoMicrosoft.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoMicrosoft.name, BrIconLogoMicrosoft)
  },
} as Plugin

export { BrIconLogoMicrosoft }
