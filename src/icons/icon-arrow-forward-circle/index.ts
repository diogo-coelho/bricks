import { App, Plugin } from 'vue'
import BrIconArrowForwardCircle from './BrIconArrowForwardCircle.vue'
import BrIconArrowForwardCircleOutline from './BrIconArrowForwardCircleOutline.vue'
import BrIconArrowForwardCircleSharp from './BrIconArrowForwardCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowForwardCircle.name, BrIconArrowForwardCircle)
    app.component(
      BrIconArrowForwardCircleOutline.name,
      BrIconArrowForwardCircleOutline
    )
    app.component(
      BrIconArrowForwardCircleSharp.name,
      BrIconArrowForwardCircleSharp
    )
  },
} as Plugin

export {
  BrIconArrowForwardCircle,
  BrIconArrowForwardCircleOutline,
  BrIconArrowForwardCircleSharp,
}
