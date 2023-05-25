import { App, Plugin } from 'vue'
import BrIconSettings from './BrIconSettings.vue'

export default {
  install(app: App) {
    app.component(BrIconSettings.name, BrIconSettings)
  },
} as Plugin

export { BrIconSettings }
