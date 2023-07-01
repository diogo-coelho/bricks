import { App, Plugin } from 'vue'
import BrIconPaperPlaneOutline from './BrIconPaperPlaneOutline.vue'
import BrIconPaperPlaneSharp from './BrIconPaperPlaneSharp.vue'
import BrIconPaperPlane from './BrIconPaperPlane.vue'

export default {
  install(app: App) {
    app.component(BrIconPaperPlaneOutline.name, BrIconPaperPlaneOutline)
    app.component(BrIconPaperPlaneSharp.name, BrIconPaperPlaneSharp)
    app.component(BrIconPaperPlane.name, BrIconPaperPlane)
  },
} as Plugin

export { BrIconPaperPlaneOutline, BrIconPaperPlaneSharp, BrIconPaperPlane }
