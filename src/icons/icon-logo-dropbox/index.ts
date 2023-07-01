import { App, Plugin } from 'vue'
import BrIconLogoDropbox from './BrIconLogoDropbox.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDropbox.name, BrIconLogoDropbox)
  },
} as Plugin

export { BrIconLogoDropbox }
