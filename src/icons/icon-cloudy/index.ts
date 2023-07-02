import { App, Plugin } from 'vue'
import BrIconCloudyOutline from './BrIconCloudyOutline.vue'
import BrIconCloudySharp from './BrIconCloudySharp.vue'
import BrIconCloudy from './BrIconCloudy.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudyOutline.name, BrIconCloudyOutline)
    app.component(BrIconCloudySharp.name, BrIconCloudySharp)
    app.component(BrIconCloudy.name, BrIconCloudy)
  },
} as Plugin

export { BrIconCloudyOutline, BrIconCloudySharp, BrIconCloudy }
