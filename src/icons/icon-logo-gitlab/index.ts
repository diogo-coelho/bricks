import { App, Plugin } from 'vue'
import BrIconLogoGitlab from './BrIconLogoGitlab.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoGitlab.name, BrIconLogoGitlab)
  },
} as Plugin

export { BrIconLogoGitlab }
