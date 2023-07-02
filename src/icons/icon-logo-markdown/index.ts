import { App, Plugin } from 'vue'
import BrIconLogoMarkdown from './BrIconLogoMarkdown.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoMarkdown.name, BrIconLogoMarkdown)
  },
} as Plugin

export { BrIconLogoMarkdown }
