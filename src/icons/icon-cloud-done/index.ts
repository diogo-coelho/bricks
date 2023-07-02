import { App, Plugin } from 'vue'
import BrIconCloudDoneOutline from './BrIconCloudDoneOutline.vue'
import BrIconCloudDoneSharp from './BrIconCloudDoneSharp.vue'
import BrIconCloudDone from './BrIconCloudDone.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudDoneOutline.name, BrIconCloudDoneOutline)
    app.component(BrIconCloudDoneSharp.name, BrIconCloudDoneSharp)
    app.component(BrIconCloudDone.name, BrIconCloudDone)
  },
} as Plugin

export { BrIconCloudDoneOutline, BrIconCloudDoneSharp, BrIconCloudDone }
