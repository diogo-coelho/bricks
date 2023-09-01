import { App, Plugin } from 'vue'
import BrSelect from './BrSelect.vue'
import BrSelectItem from './BrSelectItem.vue'

export default {
  install(app: App) {
    app.component(BrSelect.name, BrSelect)
    app.component(BrSelectItem.name, BrSelectItem)
  },
} as Plugin

export { BrSelect }
