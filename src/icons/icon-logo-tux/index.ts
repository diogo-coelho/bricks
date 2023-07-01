import { App, Plugin } from 'vue'
import BrIconLogoTux from './BrIconLogoTux.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTux.name, BrIconLogoTux)
  },
} as Plugin

export { BrIconLogoTux }
