import { App, Plugin } from 'vue'
import BrIconHeartCircleOutline from './BrIconHeartCircleOutline.vue'
import BrIconHeartCircleSharp from './BrIconHeartCircleSharp.vue'
import BrIconHeartCircle from './BrIconHeartCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconHeartCircleOutline.name, BrIconHeartCircleOutline)
    app.component(BrIconHeartCircleSharp.name, BrIconHeartCircleSharp)
    app.component(BrIconHeartCircle.name, BrIconHeartCircle)
  },
} as Plugin

export { BrIconHeartCircleOutline, BrIconHeartCircleSharp, BrIconHeartCircle }
