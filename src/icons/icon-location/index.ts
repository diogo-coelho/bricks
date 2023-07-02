import { App, Plugin } from 'vue'
import BrIconLocationOutline from './BrIconLocationOutline.vue'
import BrIconLocationSharp from './BrIconLocationSharp.vue'
import BrIconLocation from './BrIconLocation.vue'

export default {
  install(app: App) {
    app.component(BrIconLocationOutline.name, BrIconLocationOutline)
    app.component(BrIconLocationSharp.name, BrIconLocationSharp)
    app.component(BrIconLocation.name, BrIconLocation)
  },
} as Plugin

export { BrIconLocationOutline, BrIconLocationSharp, BrIconLocation }
