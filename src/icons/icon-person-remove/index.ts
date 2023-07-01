import { App, Plugin } from 'vue'
import BrIconPersonRemoveOutline from './BrIconPersonRemoveOutline.vue'
import BrIconPersonRemoveSharp from './BrIconPersonRemoveSharp.vue'
import BrIconPersonRemove from './BrIconPersonRemove.vue'

export default {
  install(app: App) {
    app.component(BrIconPersonRemoveOutline.name, BrIconPersonRemoveOutline)
    app.component(BrIconPersonRemoveSharp.name, BrIconPersonRemoveSharp)
    app.component(BrIconPersonRemove.name, BrIconPersonRemove)
  },
} as Plugin

export {
  BrIconPersonRemoveOutline,
  BrIconPersonRemoveSharp,
  BrIconPersonRemove,
}
