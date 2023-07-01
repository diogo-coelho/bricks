import { App, Plugin } from 'vue'
import BrIconLogoVue from './BrIconLogoVue.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoVue.name, BrIconLogoVue)
  },
} as Plugin

export { BrIconLogoVue }
