import { App, Plugin } from 'vue'
import BrIconLogoCodepen from './BrIconLogoCodepen.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoCodepen.name, BrIconLogoCodepen)
  },
} as Plugin

export { BrIconLogoCodepen }
