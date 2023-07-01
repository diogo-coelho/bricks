import { App, Plugin } from 'vue'
import BrIconChevronUpCircleOutline from './BrIconChevronUpCircleOutline.vue'
import BrIconChevronUpCircleSharp from './BrIconChevronUpCircleSharp.vue'
import BrIconChevronUpCircle from './BrIconChevronUpCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChevronUpCircleOutline.name,
      BrIconChevronUpCircleOutline
    )
    app.component(BrIconChevronUpCircleSharp.name, BrIconChevronUpCircleSharp)
    app.component(BrIconChevronUpCircle.name, BrIconChevronUpCircle)
  },
} as Plugin

export {
  BrIconChevronUpCircleOutline,
  BrIconChevronUpCircleSharp,
  BrIconChevronUpCircle,
}
