import { App, Plugin } from 'vue'
import BrIconLogoBehance from './BrIconLogoBehance.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoBehance.name, BrIconLogoBehance)
  },
} as Plugin

export { BrIconLogoBehance }
