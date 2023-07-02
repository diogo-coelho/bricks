import { App, Plugin } from 'vue'
import BrIconLogoStackoverflow from './BrIconLogoStackoverflow.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoStackoverflow.name, BrIconLogoStackoverflow)
  },
} as Plugin

export { BrIconLogoStackoverflow }
