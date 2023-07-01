import { App, Plugin } from 'vue'
import BrIconBonfireOutline from './BrIconBonfireOutline.vue'
import BrIconBonfireSharp from './BrIconBonfireSharp.vue'
import BrIconBonfire from './BrIconBonfire.vue'

export default {
  install(app: App) {
    app.component(BrIconBonfireOutline.name, BrIconBonfireOutline)
    app.component(BrIconBonfireSharp.name, BrIconBonfireSharp)
    app.component(BrIconBonfire.name, BrIconBonfire)
  },
} as Plugin

export { BrIconBonfireOutline, BrIconBonfireSharp, BrIconBonfire }
