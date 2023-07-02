import { App, Plugin } from 'vue'
import BrIconNavigateOutline from './BrIconNavigateOutline.vue'
import BrIconNavigateSharp from './BrIconNavigateSharp.vue'
import BrIconNavigate from './BrIconNavigate.vue'

export default {
  install(app: App) {
    app.component(BrIconNavigateOutline.name, BrIconNavigateOutline)
    app.component(BrIconNavigateSharp.name, BrIconNavigateSharp)
    app.component(BrIconNavigate.name, BrIconNavigate)
  },
} as Plugin

export { BrIconNavigateOutline, BrIconNavigateSharp, BrIconNavigate }
