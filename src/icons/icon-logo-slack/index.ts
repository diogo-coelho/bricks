import { App, Plugin } from 'vue'
import BrIconLogoSlack from './BrIconLogoSlack.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSlack.name, BrIconLogoSlack)
  },
} as Plugin

export { BrIconLogoSlack }
