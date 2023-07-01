import { App, Plugin } from 'vue'
import BrIconLogoDribbble from './BrIconLogoDribbble.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDribbble.name, BrIconLogoDribbble)
  },
} as Plugin

export { BrIconLogoDribbble }
