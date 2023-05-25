import { App, Plugin } from 'vue'
import BrSelectItem from './BrSelectItem.vue'

export default {
  install(app: App) {
    app.component(BrSelectItem.name, BrSelectItem)
  },
} as Plugin

export { BrSelectItem }
