import { App, Plugin } from 'vue'
import BrIconMenu from './BrIconMenu.vue'

export default {
  install(app: App) {
    app.component(BrIconMenu.name, BrIconMenu)
  },
} as Plugin

export { BrIconMenu }
