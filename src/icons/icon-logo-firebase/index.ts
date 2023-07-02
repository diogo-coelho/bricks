import { App, Plugin } from 'vue'
import BrIconLogoFirebase from './BrIconLogoFirebase.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFirebase.name, BrIconLogoFirebase)
  },
} as Plugin

export { BrIconLogoFirebase }
