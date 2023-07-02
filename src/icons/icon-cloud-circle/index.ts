import { App, Plugin } from 'vue'
import BrIconCloudCircleOutline from './BrIconCloudCircleOutline.vue'
import BrIconCloudCircleSharp from './BrIconCloudCircleSharp.vue'
import BrIconCloudCircle from './BrIconCloudCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudCircleOutline.name, BrIconCloudCircleOutline)
    app.component(BrIconCloudCircleSharp.name, BrIconCloudCircleSharp)
    app.component(BrIconCloudCircle.name, BrIconCloudCircle)
  },
} as Plugin

export { BrIconCloudCircleOutline, BrIconCloudCircleSharp, BrIconCloudCircle }
