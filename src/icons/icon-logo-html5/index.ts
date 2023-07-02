import { App, Plugin } from 'vue'
import BrIconLogoHtml5 from './BrIconLogoHtml5.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoHtml5.name, BrIconLogoHtml5)
  },
} as Plugin

export { BrIconLogoHtml5 }
