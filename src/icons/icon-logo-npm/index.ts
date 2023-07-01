import { App, Plugin } from 'vue'
import BrIconLogoNpm from './BrIconLogoNpm.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoNpm.name, BrIconLogoNpm)
  },
} as Plugin

export { BrIconLogoNpm }
