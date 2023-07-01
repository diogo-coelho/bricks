import { App, Plugin } from 'vue'
import BrIconColorFillOutline from './BrIconColorFillOutline.vue'
import BrIconColorFillSharp from './BrIconColorFillSharp.vue'
import BrIconColorFill from './BrIconColorFill.vue'

export default {
  install(app: App) {
    app.component(BrIconColorFillOutline.name, BrIconColorFillOutline)
    app.component(BrIconColorFillSharp.name, BrIconColorFillSharp)
    app.component(BrIconColorFill.name, BrIconColorFill)
  },
} as Plugin

export { BrIconColorFillOutline, BrIconColorFillSharp, BrIconColorFill }
