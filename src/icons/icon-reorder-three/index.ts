import { App, Plugin } from 'vue'
import BrIconReorderThreeOutline from './BrIconReorderThreeOutline.vue'
import BrIconReorderThreeSharp from './BrIconReorderThreeSharp.vue'
import BrIconReorderThree from './BrIconReorderThree.vue'

export default {
  install(app: App) {
    app.component(BrIconReorderThreeOutline.name, BrIconReorderThreeOutline)
    app.component(BrIconReorderThreeSharp.name, BrIconReorderThreeSharp)
    app.component(BrIconReorderThree.name, BrIconReorderThree)
  },
} as Plugin

export {
  BrIconReorderThreeOutline,
  BrIconReorderThreeSharp,
  BrIconReorderThree,
}
