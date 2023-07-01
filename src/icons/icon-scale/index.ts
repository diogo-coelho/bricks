import { App, Plugin } from 'vue'
import BrIconScaleOutline from './BrIconScaleOutline.vue'
import BrIconScaleSharp from './BrIconScaleSharp.vue'
import BrIconScale from './BrIconScale.vue'

export default {
  install(app: App) {
    app.component(BrIconScaleOutline.name, BrIconScaleOutline)
    app.component(BrIconScaleSharp.name, BrIconScaleSharp)
    app.component(BrIconScale.name, BrIconScale)
  },
} as Plugin

export { BrIconScaleOutline, BrIconScaleSharp, BrIconScale }
