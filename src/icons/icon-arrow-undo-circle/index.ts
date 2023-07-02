import { App, Plugin } from 'vue'
import BrIconArrowUndoCircle from './BrIconArrowUndoCircle.vue'
import BrIconArrowUndoCircleOutline from './BrIconArrowUndoCircleOutline.vue'
import BrIconArrowUndoCircleSharp from './BrIconArrowUndoCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowUndoCircle.name, BrIconArrowUndoCircle)
    app.component(
      BrIconArrowUndoCircleOutline.name,
      BrIconArrowUndoCircleOutline
    )
    app.component(BrIconArrowUndoCircleSharp.name, BrIconArrowUndoCircleSharp)
  },
} as Plugin

export {
  BrIconArrowUndoCircle,
  BrIconArrowUndoCircleOutline,
  BrIconArrowUndoCircleSharp,
}
