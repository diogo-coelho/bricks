import { App, Plugin } from 'vue'
import BrBreadcrumb from './BrBreadcrumb.vue'

export default {
  install(app: App) {
    app.component(BrBreadcrumb.name, BrBreadcrumb)
  },
} as Plugin

export { BrBreadcrumb }
