import { App, Plugin } from 'vue'
import BrIconLogoSkype from './BrIconLogoSkype.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSkype.name, BrIconLogoSkype)
  },
} as Plugin

export { BrIconLogoSkype }
