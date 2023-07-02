import { App, Plugin } from 'vue'
import BrIconCaretBackCircleOutline from './BrIconCaretBackCircleOutline.vue'
import BrIconCaretBackCircleSharp from './BrIconCaretBackCircleSharp.vue'
import BrIconCaretBackCircle from './BrIconCaretBackCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconCaretBackCircleOutline.name,
      BrIconCaretBackCircleOutline
    )
    app.component(BrIconCaretBackCircleSharp.name, BrIconCaretBackCircleSharp)
    app.component(BrIconCaretBackCircle.name, BrIconCaretBackCircle)
  },
} as Plugin

export {
  BrIconCaretBackCircleOutline,
  BrIconCaretBackCircleSharp,
  BrIconCaretBackCircle,
}
