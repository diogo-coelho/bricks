import { App, Plugin } from 'vue'
import BrIconLogoRss from './BrIconLogoRss.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoRss.name, BrIconLogoRss)
  },
} as Plugin

export { BrIconLogoRss }
