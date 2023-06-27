import { App, Plugin } from 'vue'
import BrIconSearch from './BrIconSearch.vue'

export default {
  install(app: App) {
    app.component(BrIconSearch.name, BrIconSearch)
  },
} as Plugin

export { BrIconSearch }