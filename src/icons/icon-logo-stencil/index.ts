import { App, Plugin } from 'vue'
import BrIconLogoStencil from './BrIconLogoStencil.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoStencil.name, BrIconLogoStencil)
  },
} as Plugin

export { BrIconLogoStencil }
