import { App, Plugin } from 'vue'
import BrIconLogoVimeo from './BrIconLogoVimeo.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoVimeo.name, BrIconLogoVimeo)
  },
} as Plugin

export { BrIconLogoVimeo }
