import { App, Plugin } from 'vue'
import BrIconPintOutline from './BrIconPintOutline.vue'
import BrIconPintSharp from './BrIconPintSharp.vue'
import BrIconPint from './BrIconPint.vue'

export default {
  install(app: App) {
    app.component(BrIconPintOutline.name, BrIconPintOutline)
    app.component(BrIconPintSharp.name, BrIconPintSharp)
    app.component(BrIconPint.name, BrIconPint)
  },
} as Plugin

export { BrIconPintOutline, BrIconPintSharp, BrIconPint }
