import { App, Plugin } from 'vue'
import BrIconLogoCss3 from './BrIconLogoCss3.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoCss3.name, BrIconLogoCss3)
  },
} as Plugin

export { BrIconLogoCss3 }
