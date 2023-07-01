import { App, Plugin } from 'vue'
import BrIconDiscOutline from './BrIconDiscOutline.vue'
import BrIconDiscSharp from './BrIconDiscSharp.vue'
import BrIconDisc from './BrIconDisc.vue'

export default {
  install(app: App) {
    app.component(BrIconDiscOutline.name, BrIconDiscOutline)
    app.component(BrIconDiscSharp.name, BrIconDiscSharp)
    app.component(BrIconDisc.name, BrIconDisc)
  },
} as Plugin

export { BrIconDiscOutline, BrIconDiscSharp, BrIconDisc }
