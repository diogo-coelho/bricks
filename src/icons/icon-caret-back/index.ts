import { App, Plugin } from 'vue'
import BrIconCaretBackOutline from './BrIconCaretBackOutline.vue'
import BrIconCaretBackSharp from './BrIconCaretBackSharp.vue'
import BrIconCaretBack from './BrIconCaretBack.vue'

export default {
  install(app: App) {
    app.component(BrIconCaretBackOutline.name, BrIconCaretBackOutline)
    app.component(BrIconCaretBackSharp.name, BrIconCaretBackSharp)
    app.component(BrIconCaretBack.name, BrIconCaretBack)
  },
} as Plugin

export { BrIconCaretBackOutline, BrIconCaretBackSharp, BrIconCaretBack }
