import { App, Plugin } from 'vue'
import BrIconLogoBuffer from './BrIconLogoBuffer.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoBuffer.name, BrIconLogoBuffer)
  },
} as Plugin

export { BrIconLogoBuffer }
