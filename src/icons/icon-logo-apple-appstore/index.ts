import { App, Plugin } from 'vue'
import BrIconLogoAppleAppstore from './BrIconLogoAppleAppstore.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAppleAppstore.name, BrIconLogoAppleAppstore)
  },
} as Plugin

export { BrIconLogoAppleAppstore }
