import { App, Plugin } from 'vue'
import BrIconClear from './BrIconClear.vue'

export default {
  install(app: App) {
    app.component(BrIconClear.name, BrIconClear)
  },
} as Plugin

export { BrIconClear }
