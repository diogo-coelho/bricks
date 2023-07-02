import { App, Plugin } from 'vue'
import BrIconLogoVercel from './BrIconLogoVercel.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoVercel.name, BrIconLogoVercel)
  },
} as Plugin

export { BrIconLogoVercel }
