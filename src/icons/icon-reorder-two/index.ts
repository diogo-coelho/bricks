import { App, Plugin } from 'vue'
import BrIconReorderTwoOutline from './BrIconReorderTwoOutline.vue'
import BrIconReorderTwoSharp from './BrIconReorderTwoSharp.vue'
import BrIconReorderTwo from './BrIconReorderTwo.vue'

export default {
  install(app: App) {
    app.component(BrIconReorderTwoOutline.name, BrIconReorderTwoOutline)
    app.component(BrIconReorderTwoSharp.name, BrIconReorderTwoSharp)
    app.component(BrIconReorderTwo.name, BrIconReorderTwo)
  },
} as Plugin

export { BrIconReorderTwoOutline, BrIconReorderTwoSharp, BrIconReorderTwo }
