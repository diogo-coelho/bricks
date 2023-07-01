import { App, Plugin } from 'vue'
import BrIconCutOutline from './BrIconCutOutline.vue'
import BrIconCutSharp from './BrIconCutSharp.vue'
import BrIconCut from './BrIconCut.vue'

export default {
  install(app: App) {
    app.component(BrIconCutOutline.name, BrIconCutOutline)
    app.component(BrIconCutSharp.name, BrIconCutSharp)
    app.component(BrIconCut.name, BrIconCut)
  },
} as Plugin

export { BrIconCutOutline, BrIconCutSharp, BrIconCut }
