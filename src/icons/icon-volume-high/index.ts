import { App, Plugin } from 'vue'
import BrIconVolumeHighOutline from './BrIconVolumeHighOutline.vue'
import BrIconVolumeHighSharp from './BrIconVolumeHighSharp.vue'
import BrIconVolumeHigh from './BrIconVolumeHigh.vue'

export default {
  install(app: App) {
    app.component(BrIconVolumeHighOutline.name, BrIconVolumeHighOutline)
    app.component(BrIconVolumeHighSharp.name, BrIconVolumeHighSharp)
    app.component(BrIconVolumeHigh.name, BrIconVolumeHigh)
  },
} as Plugin

export { BrIconVolumeHighOutline, BrIconVolumeHighSharp, BrIconVolumeHigh }
