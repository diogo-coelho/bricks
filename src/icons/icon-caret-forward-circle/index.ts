import { App, Plugin } from 'vue'
import BrIconCaretForwardCircleOutline from './BrIconCaretForwardCircleOutline.vue'
import BrIconCaretForwardCircleSharp from './BrIconCaretForwardCircleSharp.vue'
import BrIconCaretForwardCircle from './BrIconCaretForwardCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconCaretForwardCircleOutline.name,
      BrIconCaretForwardCircleOutline
    )
    app.component(
      BrIconCaretForwardCircleSharp.name,
      BrIconCaretForwardCircleSharp
    )
    app.component(BrIconCaretForwardCircle.name, BrIconCaretForwardCircle)
  },
} as Plugin

export {
  BrIconCaretForwardCircleOutline,
  BrIconCaretForwardCircleSharp,
  BrIconCaretForwardCircle,
}
