import { App, Plugin } from 'vue'
import BrIconHeartHalfOutline from './BrIconHeartHalfOutline.vue'
import BrIconHeartHalfSharp from './BrIconHeartHalfSharp.vue'
import BrIconHeartHalf from './BrIconHeartHalf.vue'

export default {
  install(app: App) {
    app.component(BrIconHeartHalfOutline.name, BrIconHeartHalfOutline)
    app.component(BrIconHeartHalfSharp.name, BrIconHeartHalfSharp)
    app.component(BrIconHeartHalf.name, BrIconHeartHalf)
  },
} as Plugin

export { BrIconHeartHalfOutline, BrIconHeartHalfSharp, BrIconHeartHalf }
