import { App, Plugin } from 'vue'
import BrSelect from './BrSelect.vue'

export default {
  install(app: App) {
    app.component(BrSelect.name, BrSelect)
  },
} as Plugin

export { BrSelect }
