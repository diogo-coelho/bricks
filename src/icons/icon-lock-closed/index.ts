import { App, Plugin } from 'vue'
import BrIconLockClosedOutline from './BrIconLockClosedOutline.vue'
import BrIconLockClosedSharp from './BrIconLockClosedSharp.vue'
import BrIconLockClosed from './BrIconLockClosed.vue'

export default {
  install(app: App) {
    app.component(BrIconLockClosedOutline.name, BrIconLockClosedOutline)
    app.component(BrIconLockClosedSharp.name, BrIconLockClosedSharp)
    app.component(BrIconLockClosed.name, BrIconLockClosed)
  },
} as Plugin

export { BrIconLockClosedOutline, BrIconLockClosedSharp, BrIconLockClosed }
