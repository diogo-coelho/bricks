import { App, Plugin } from 'vue'
import BrIconLogoGithub from './BrIconLogoGithub.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoGithub.name, BrIconLogoGithub)
  },
} as Plugin

export { BrIconLogoGithub }
