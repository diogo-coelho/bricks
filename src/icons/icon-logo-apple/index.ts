import { App, Plugin } from 'vue'
import BrIconLogoApple from './BrIconLogoApple.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoApple.name, BrIconLogoApple)
  },
} as Plugin

export { BrIconLogoApple }
