import { App, Plugin } from 'vue'
import BrIconLogoReact from './BrIconLogoReact.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoReact.name, BrIconLogoReact)
  },
} as Plugin

export { BrIconLogoReact }
