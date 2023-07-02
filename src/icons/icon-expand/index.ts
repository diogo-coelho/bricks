import { App, Plugin } from 'vue'
import BrIconExpandOutline from './BrIconExpandOutline.vue'
import BrIconExpandSharp from './BrIconExpandSharp.vue'
import BrIconExpand from './BrIconExpand.vue'

export default {
  install(app: App) {
    app.component(BrIconExpandOutline.name, BrIconExpandOutline)
    app.component(BrIconExpandSharp.name, BrIconExpandSharp)
    app.component(BrIconExpand.name, BrIconExpand)
  },
} as Plugin

export { BrIconExpandOutline, BrIconExpandSharp, BrIconExpand }
