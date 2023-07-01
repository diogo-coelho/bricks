import { App, Plugin } from 'vue'
import BrIconCloudOutline from './BrIconCloudOutline.vue'
import BrIconCloudSharp from './BrIconCloudSharp.vue'
import BrIconCloud from './BrIconCloud.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudOutline.name, BrIconCloudOutline)
    app.component(BrIconCloudSharp.name, BrIconCloudSharp)
    app.component(BrIconCloud.name, BrIconCloud)
  },
} as Plugin

export { BrIconCloudOutline, BrIconCloudSharp, BrIconCloud }
