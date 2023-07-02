import { App, Plugin } from 'vue'
import BrIconCaretUpCircleOutline from './BrIconCaretUpCircleOutline.vue'
import BrIconCaretUpCircleSharp from './BrIconCaretUpCircleSharp.vue'
import BrIconCaretUpCircle from './BrIconCaretUpCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconCaretUpCircleOutline.name, BrIconCaretUpCircleOutline)
    app.component(BrIconCaretUpCircleSharp.name, BrIconCaretUpCircleSharp)
    app.component(BrIconCaretUpCircle.name, BrIconCaretUpCircle)
  },
} as Plugin

export {
  BrIconCaretUpCircleOutline,
  BrIconCaretUpCircleSharp,
  BrIconCaretUpCircle,
}
