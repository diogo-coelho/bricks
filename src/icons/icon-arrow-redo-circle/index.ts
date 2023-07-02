import { App, Plugin } from 'vue'
import BrIconArrowRedoCircle from './BrIconArrowRedoCircle.vue'
import BrIconArrowRedoCircleOutline from './BrIconArrowRedoCircleOutline.vue'
import BrIconArrowRedoCircleSharp from './BrIconArrowRedoCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowRedoCircle.name, BrIconArrowRedoCircle)
    app.component(
      BrIconArrowRedoCircleOutline.name,
      BrIconArrowRedoCircleOutline
    )
    app.component(BrIconArrowRedoCircleSharp.name, BrIconArrowRedoCircleSharp)
  },
} as Plugin

export {
  BrIconArrowRedoCircle,
  BrIconArrowRedoCircleOutline,
  BrIconArrowRedoCircleSharp,
}
