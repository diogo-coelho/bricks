import { App, Plugin } from 'vue'
import BrIconPawOutline from './BrIconPawOutline.vue'
import BrIconPawSharp from './BrIconPawSharp.vue'
import BrIconPaw from './BrIconPaw.vue'

export default {
  install(app: App) {
    app.component(BrIconPawOutline.name, BrIconPawOutline)
    app.component(BrIconPawSharp.name, BrIconPawSharp)
    app.component(BrIconPaw.name, BrIconPaw)
  },
} as Plugin

export { BrIconPawOutline, BrIconPawSharp, BrIconPaw }
