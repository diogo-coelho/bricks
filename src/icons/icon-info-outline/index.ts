import { App, Plugin } from 'vue'
import BrIconInfoOutline from './BrIconInfoOutline.vue'

export default {
  install(app: App) {
    app.component(BrIconInfoOutline.name, BrIconInfoOutline)
  },
} as Plugin

export { BrIconInfoOutline }
