import { App, Plugin } from 'vue'
import BrIconChevronBackCircleOutline from './BrIconChevronBackCircleOutline.vue'
import BrIconChevronBackCircleSharp from './BrIconChevronBackCircleSharp.vue'
import BrIconChevronBackCircle from './BrIconChevronBackCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChevronBackCircleOutline.name,
      BrIconChevronBackCircleOutline
    )
    app.component(
      BrIconChevronBackCircleSharp.name,
      BrIconChevronBackCircleSharp
    )
    app.component(BrIconChevronBackCircle.name, BrIconChevronBackCircle)
  },
} as Plugin

export {
  BrIconChevronBackCircleOutline,
  BrIconChevronBackCircleSharp,
  BrIconChevronBackCircle,
}
