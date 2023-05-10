import { App, Plugin } from 'vue'
import BrInput from './BrInput.vue'

export default {
  install(app: App) {
    app.component(BrInput.name, BrInput)
  },
} as Plugin

export { BrInput }
