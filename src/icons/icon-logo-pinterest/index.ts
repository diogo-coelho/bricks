import { App, Plugin } from 'vue'
import BrIconLogoPinterest from './BrIconLogoPinterest.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoPinterest.name, BrIconLogoPinterest)
  },
} as Plugin

export { BrIconLogoPinterest }
