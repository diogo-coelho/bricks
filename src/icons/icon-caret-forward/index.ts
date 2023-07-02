import { App, Plugin } from 'vue'
import BrIconCaretForwardOutline from './BrIconCaretForwardOutline.vue'
import BrIconCaretForwardSharp from './BrIconCaretForwardSharp.vue'
import BrIconCaretForward from './BrIconCaretForward.vue'

export default {
  install(app: App) {
    app.component(BrIconCaretForwardOutline.name, BrIconCaretForwardOutline)
    app.component(BrIconCaretForwardSharp.name, BrIconCaretForwardSharp)
    app.component(BrIconCaretForward.name, BrIconCaretForward)
  },
} as Plugin

export {
  BrIconCaretForwardOutline,
  BrIconCaretForwardSharp,
  BrIconCaretForward,
}
