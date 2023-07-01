import { App, Plugin } from 'vue'
import BrIconMoveOutline from './BrIconMoveOutline.vue'
import BrIconMoveSharp from './BrIconMoveSharp.vue'
import BrIconMove from './BrIconMove.vue'

export default {
  install(app: App) {
    app.component(BrIconMoveOutline.name, BrIconMoveOutline)
    app.component(BrIconMoveSharp.name, BrIconMoveSharp)
    app.component(BrIconMove.name, BrIconMove)
  },
} as Plugin

export { BrIconMoveOutline, BrIconMoveSharp, BrIconMove }
