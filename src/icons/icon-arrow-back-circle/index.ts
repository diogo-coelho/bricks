import { App, Plugin } from 'vue'
import BrIconArrowBackCircle from './BrIconArrowBackCircle.vue'
import BrIconArrowBackCircleOutline from './BrIconArrowBackCircleOutline.vue'
import BrIconArrowBackCircleSharp from './BrIconArrowBackCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowBackCircle.name, BrIconArrowBackCircle)
    app.component(
      BrIconArrowBackCircleOutline.name,
      BrIconArrowBackCircleOutline
    )
    app.component(BrIconArrowBackCircleSharp.name, BrIconArrowBackCircleSharp)
  },
} as Plugin

export {
  BrIconArrowBackCircle,
  BrIconArrowBackCircleOutline,
  BrIconArrowBackCircleSharp,
}
