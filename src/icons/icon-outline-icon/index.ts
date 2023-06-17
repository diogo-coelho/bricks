import { App, Plugin } from 'vue'
import BrIconInfoOutline from './BrIconMenu.vue'

export default {
  install(app: App) {
    app.component(BrIconInfoOutline.name, BrIconInfoOutline)
  },
} as Plugin

export { BrIconInfoOutline }
