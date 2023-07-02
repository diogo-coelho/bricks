import { App, Plugin } from 'vue'
import BrIconLockOpenOutline from './BrIconLockOpenOutline.vue'
import BrIconLockOpenSharp from './BrIconLockOpenSharp.vue'
import BrIconLockOpen from './BrIconLockOpen.vue'

export default {
  install(app: App) {
    app.component(BrIconLockOpenOutline.name, BrIconLockOpenOutline)
    app.component(BrIconLockOpenSharp.name, BrIconLockOpenSharp)
    app.component(BrIconLockOpen.name, BrIconLockOpen)
  },
} as Plugin

export { BrIconLockOpenOutline, BrIconLockOpenSharp, BrIconLockOpen }
