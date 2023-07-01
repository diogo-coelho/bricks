import { App, Plugin } from 'vue'
import BrIconHeadsetOutline from './BrIconHeadsetOutline.vue'
import BrIconHeadsetSharp from './BrIconHeadsetSharp.vue'
import BrIconHeadset from './BrIconHeadset.vue'

export default {
  install(app: App) {
    app.component(BrIconHeadsetOutline.name, BrIconHeadsetOutline)
    app.component(BrIconHeadsetSharp.name, BrIconHeadsetSharp)
    app.component(BrIconHeadset.name, BrIconHeadset)
  },
} as Plugin

export { BrIconHeadsetOutline, BrIconHeadsetSharp, BrIconHeadset }
