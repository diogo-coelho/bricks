import { App, Plugin } from 'vue'
import BrIconLogoDocker from './BrIconLogoDocker.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDocker.name, BrIconLogoDocker)
  },
} as Plugin

export { BrIconLogoDocker }
