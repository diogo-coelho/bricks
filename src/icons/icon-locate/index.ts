import { App, Plugin } from 'vue'
import BrIconLocateOutline from './BrIconLocateOutline.vue'
import BrIconLocateSharp from './BrIconLocateSharp.vue'
import BrIconLocate from './BrIconLocate.vue'

export default {
  install(app: App) {
    app.component(BrIconLocateOutline.name, BrIconLocateOutline)
    app.component(BrIconLocateSharp.name, BrIconLocateSharp)
    app.component(BrIconLocate.name, BrIconLocate)
  },
} as Plugin

export { BrIconLocateOutline, BrIconLocateSharp, BrIconLocate }
