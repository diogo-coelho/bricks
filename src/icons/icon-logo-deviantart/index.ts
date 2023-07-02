import { App, Plugin } from 'vue'
import BrIconLogoDeviantart from './BrIconLogoDeviantart.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDeviantart.name, BrIconLogoDeviantart)
  },
} as Plugin

export { BrIconLogoDeviantart }
