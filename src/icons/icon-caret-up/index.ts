import { App, Plugin } from 'vue'
import BrIconCaretUpOutline from './BrIconCaretUpOutline.vue'
import BrIconCaretUpSharp from './BrIconCaretUpSharp.vue'
import BrIconCaretUp from './BrIconCaretUp.vue'

export default {
  install(app: App) {
    app.component(BrIconCaretUpOutline.name, BrIconCaretUpOutline)
    app.component(BrIconCaretUpSharp.name, BrIconCaretUpSharp)
    app.component(BrIconCaretUp.name, BrIconCaretUp)
  },
} as Plugin

export { BrIconCaretUpOutline, BrIconCaretUpSharp, BrIconCaretUp }
