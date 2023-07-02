import { App, Plugin } from 'vue'
import BrIconCloudyNightOutline from './BrIconCloudyNightOutline.vue'
import BrIconCloudyNightSharp from './BrIconCloudyNightSharp.vue'
import BrIconCloudyNight from './BrIconCloudyNight.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudyNightOutline.name, BrIconCloudyNightOutline)
    app.component(BrIconCloudyNightSharp.name, BrIconCloudyNightSharp)
    app.component(BrIconCloudyNight.name, BrIconCloudyNight)
  },
} as Plugin

export { BrIconCloudyNightOutline, BrIconCloudyNightSharp, BrIconCloudyNight }
