import { App, Plugin } from 'vue'
import BrIconSadOutline from './BrIconSadOutline.vue'
import BrIconSadSharp from './BrIconSadSharp.vue'
import BrIconSad from './BrIconSad.vue'

export default {
  install(app: App) {
    app.component(BrIconSadOutline.name, BrIconSadOutline)
    app.component(BrIconSadSharp.name, BrIconSadSharp)
    app.component(BrIconSad.name, BrIconSad)
  },
} as Plugin

export { BrIconSadOutline, BrIconSadSharp, BrIconSad }
