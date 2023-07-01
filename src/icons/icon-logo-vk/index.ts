import { App, Plugin } from 'vue'
import BrIconLogoVk from './BrIconLogoVk.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoVk.name, BrIconLogoVk)
  },
} as Plugin

export { BrIconLogoVk }
