import { App, Plugin } from 'vue'
import BrRadio from './BrRadio.vue'

export default {
  install(app: App) {
    app.component(BrRadio.name, BrRadio)
  },
} as Plugin

export { BrRadio }
