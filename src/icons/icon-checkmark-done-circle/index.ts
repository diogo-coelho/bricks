import { App, Plugin } from 'vue'
import BrIconCheckmarkDoneCircleOutline from './BrIconCheckmarkDoneCircleOutline.vue'
import BrIconCheckmarkDoneCircleSharp from './BrIconCheckmarkDoneCircleSharp.vue'
import BrIconCheckmarkDoneCircle from './BrIconCheckmarkDoneCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconCheckmarkDoneCircleOutline.name,
      BrIconCheckmarkDoneCircleOutline
    )
    app.component(
      BrIconCheckmarkDoneCircleSharp.name,
      BrIconCheckmarkDoneCircleSharp
    )
    app.component(BrIconCheckmarkDoneCircle.name, BrIconCheckmarkDoneCircle)
  },
} as Plugin

export {
  BrIconCheckmarkDoneCircleOutline,
  BrIconCheckmarkDoneCircleSharp,
  BrIconCheckmarkDoneCircle,
}
