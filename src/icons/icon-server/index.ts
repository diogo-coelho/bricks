import { App, Plugin } from 'vue'
import BrIconServerOutline from './BrIconServerOutline.vue'
import BrIconServerSharp from './BrIconServerSharp.vue'
import BrIconServer from './BrIconServer.vue'

export default {
  install(app: App) {
    app.component(BrIconServerOutline.name, BrIconServerOutline)
    app.component(BrIconServerSharp.name, BrIconServerSharp)
    app.component(BrIconServer.name, BrIconServer)
  },
} as Plugin

export { BrIconServerOutline, BrIconServerSharp, BrIconServer }
