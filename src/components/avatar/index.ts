import { App, Plugin } from 'vue'
import BrAvatar from './BrAvatar.vue'

export default {
  install(app: App) {
    app.component(BrAvatar.name, BrAvatar)
  },
} as Plugin

export { BrAvatar }
