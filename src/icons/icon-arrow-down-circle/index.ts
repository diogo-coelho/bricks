import { App, Plugin } from 'vue'
import BrIconArrowDownCircle from './BrIconArrowDownCircle.vue'
import BrIconArrowDownCircleOutline from './BrIconArrowDownCircleOutline.vue'
import BrIconArrowDownCircleSharp from './BrIconArrowDownCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowDownCircle.name, BrIconArrowDownCircle)
    app.component(
      BrIconArrowDownCircleOutline.name,
      BrIconArrowDownCircleOutline
    )
    app.component(BrIconArrowDownCircleSharp.name, BrIconArrowDownCircleSharp)
  },
} as Plugin

export {
  BrIconArrowDownCircle,
  BrIconArrowDownCircleOutline,
  BrIconArrowDownCircleSharp,
}
