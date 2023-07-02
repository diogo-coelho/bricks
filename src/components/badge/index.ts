import { App, Plugin } from 'vue'
import BrBadge from './BrBadge.vue'

export default {
  install(app: App) {
    app.component(BrBadge.name, BrBadge)
  },
} as Plugin

export { BrBadge }
