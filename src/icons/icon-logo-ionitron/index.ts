import { App, Plugin } from 'vue'
import BrIconLogoIonitron from './BrIconLogoIonitron.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoIonitron.name, BrIconLogoIonitron)
  },
} as Plugin

export { BrIconLogoIonitron }
