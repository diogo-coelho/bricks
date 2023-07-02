import { App, Plugin } from 'vue'
import BrIconReorderFourOutline from './BrIconReorderFourOutline.vue'
import BrIconReorderFourSharp from './BrIconReorderFourSharp.vue'
import BrIconReorderFour from './BrIconReorderFour.vue'

export default {
  install(app: App) {
    app.component(BrIconReorderFourOutline.name, BrIconReorderFourOutline)
    app.component(BrIconReorderFourSharp.name, BrIconReorderFourSharp)
    app.component(BrIconReorderFour.name, BrIconReorderFour)
  },
} as Plugin

export { BrIconReorderFourOutline, BrIconReorderFourSharp, BrIconReorderFour }
