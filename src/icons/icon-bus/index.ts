import { App, Plugin } from 'vue'
import BrIconBusOutline from './BrIconBusOutline.vue'
import BrIconBusSharp from './BrIconBusSharp.vue'
import BrIconBus from './BrIconBus.vue'

export default {
  install(app: App) {
    app.component(BrIconBusOutline.name, BrIconBusOutline)
    app.component(BrIconBusSharp.name, BrIconBusSharp)
    app.component(BrIconBus.name, BrIconBus)
  },
} as Plugin

export { BrIconBusOutline, BrIconBusSharp, BrIconBus }
