import { App, Plugin } from 'vue'
import BrIconSyncCircleOutline from './BrIconSyncCircleOutline.vue'
import BrIconSyncCircleSharp from './BrIconSyncCircleSharp.vue'
import BrIconSyncCircle from './BrIconSyncCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconSyncCircleOutline.name, BrIconSyncCircleOutline)
    app.component(BrIconSyncCircleSharp.name, BrIconSyncCircleSharp)
    app.component(BrIconSyncCircle.name, BrIconSyncCircle)
  },
} as Plugin

export { BrIconSyncCircleOutline, BrIconSyncCircleSharp, BrIconSyncCircle }
