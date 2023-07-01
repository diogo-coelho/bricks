import { App, Plugin } from 'vue'
import BrIconChevronDownCircleOutline from './BrIconChevronDownCircleOutline.vue'
import BrIconChevronDownCircleSharp from './BrIconChevronDownCircleSharp.vue'
import BrIconChevronDownCircle from './BrIconChevronDownCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChevronDownCircleOutline.name,
      BrIconChevronDownCircleOutline
    )
    app.component(
      BrIconChevronDownCircleSharp.name,
      BrIconChevronDownCircleSharp
    )
    app.component(BrIconChevronDownCircle.name, BrIconChevronDownCircle)
  },
} as Plugin

export {
  BrIconChevronDownCircleOutline,
  BrIconChevronDownCircleSharp,
  BrIconChevronDownCircle,
}
