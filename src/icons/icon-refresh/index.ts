import { App, Plugin } from 'vue'
import BrIconRefreshOutline from './BrIconRefreshOutline.vue'
import BrIconRefreshSharp from './BrIconRefreshSharp.vue'
import BrIconRefresh from './BrIconRefresh.vue'

export default {
  install(app: App) {
    app.component(BrIconRefreshOutline.name, BrIconRefreshOutline)
    app.component(BrIconRefreshSharp.name, BrIconRefreshSharp)
    app.component(BrIconRefresh.name, BrIconRefresh)
  },
} as Plugin

export { BrIconRefreshOutline, BrIconRefreshSharp, BrIconRefresh }
