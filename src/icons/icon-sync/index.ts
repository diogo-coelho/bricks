import { App, Plugin } from 'vue'
import BrIconSyncOutline from './BrIconSyncOutline.vue'
import BrIconSyncSharp from './BrIconSyncSharp.vue'
import BrIconSync from './BrIconSync.vue'

export default {
  install(app: App) {
    app.component(BrIconSyncOutline.name, BrIconSyncOutline)
    app.component(BrIconSyncSharp.name, BrIconSyncSharp)
    app.component(BrIconSync.name, BrIconSync)
  },
} as Plugin

export { BrIconSyncOutline, BrIconSyncSharp, BrIconSync }
