import { App, Plugin } from 'vue'
import BrIconRemoveOutline from './BrIconRemoveOutline.vue'
import BrIconRemoveSharp from './BrIconRemoveSharp.vue'
import BrIconRemove from './BrIconRemove.vue'

export default {
  install(app: App) {
    app.component(BrIconRemoveOutline.name, BrIconRemoveOutline)
    app.component(BrIconRemoveSharp.name, BrIconRemoveSharp)
    app.component(BrIconRemove.name, BrIconRemove)
  },
} as Plugin

export { BrIconRemoveOutline, BrIconRemoveSharp, BrIconRemove }
