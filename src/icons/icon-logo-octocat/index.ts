import { App, Plugin } from 'vue'
import BrIconLogoOctocat from './BrIconLogoOctocat.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoOctocat.name, BrIconLogoOctocat)
  },
} as Plugin

export { BrIconLogoOctocat }
