import { App, Plugin } from 'vue'
import BrIconLogoReddit from './BrIconLogoReddit.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoReddit.name, BrIconLogoReddit)
  },
} as Plugin

export { BrIconLogoReddit }
