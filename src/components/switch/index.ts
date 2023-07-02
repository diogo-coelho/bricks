import { App, Plugin } from 'vue'
import BrSwitch from './BrSwitch.vue'

export default {
  install(app: App) {
    app.component(BrSwitch.name, BrSwitch)
  },
} as Plugin

export { BrSwitch }
