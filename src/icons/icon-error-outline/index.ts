import { App, Plugin } from 'vue'
import BrIconErrorOutline from './BrIconErrorOutline.vue'

export default {
  install(app: App) {
    app.component(BrIconErrorOutline.name, BrIconErrorOutline)
  },
} as Plugin

export { BrIconErrorOutline }
