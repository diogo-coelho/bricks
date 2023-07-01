import { App, Plugin } from 'vue'
import BrIconLogoTumblr from './BrIconLogoTumblr.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoTumblr.name, BrIconLogoTumblr)
  },
} as Plugin

export { BrIconLogoTumblr }
