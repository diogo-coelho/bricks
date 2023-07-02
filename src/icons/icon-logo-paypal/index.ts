import { App, Plugin } from 'vue'
import BrIconLogoPaypal from './BrIconLogoPaypal.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoPaypal.name, BrIconLogoPaypal)
  },
} as Plugin

export { BrIconLogoPaypal }
