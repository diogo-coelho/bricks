import { App, Plugin } from 'vue'
import BrIconCloudOfflineOutline from './BrIconCloudOfflineOutline.vue'
import BrIconCloudOfflineSharp from './BrIconCloudOfflineSharp.vue'
import BrIconCloudOffline from './BrIconCloudOffline.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudOfflineOutline.name, BrIconCloudOfflineOutline)
    app.component(BrIconCloudOfflineSharp.name, BrIconCloudOfflineSharp)
    app.component(BrIconCloudOffline.name, BrIconCloudOffline)
  },
} as Plugin

export {
  BrIconCloudOfflineOutline,
  BrIconCloudOfflineSharp,
  BrIconCloudOffline,
}
