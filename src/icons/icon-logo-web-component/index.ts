import { App, Plugin } from 'vue'
import BrIconLogoWebComponent from './BrIconLogoWebComponent.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoWebComponent.name, BrIconLogoWebComponent)
  },
} as Plugin

export { BrIconLogoWebComponent }
