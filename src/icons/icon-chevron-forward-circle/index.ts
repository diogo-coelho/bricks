import { App, Plugin } from 'vue'
import BrIconChevronForwardCircleOutline from './BrIconChevronForwardCircleOutline.vue'
import BrIconChevronForwardCircleSharp from './BrIconChevronForwardCircleSharp.vue'
import BrIconChevronForwardCircle from './BrIconChevronForwardCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChevronForwardCircleOutline.name,
      BrIconChevronForwardCircleOutline
    )
    app.component(
      BrIconChevronForwardCircleSharp.name,
      BrIconChevronForwardCircleSharp
    )
    app.component(BrIconChevronForwardCircle.name, BrIconChevronForwardCircle)
  },
} as Plugin

export {
  BrIconChevronForwardCircleOutline,
  BrIconChevronForwardCircleSharp,
  BrIconChevronForwardCircle,
}
