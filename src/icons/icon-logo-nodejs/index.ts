import { App, Plugin } from 'vue'
import BrIconLogoNodejs from './BrIconLogoNodejs.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoNodejs.name, BrIconLogoNodejs)
  },
} as Plugin

export { BrIconLogoNodejs }
