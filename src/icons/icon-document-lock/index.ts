import { App, Plugin } from 'vue'
import BrIconDocumentLockOutline from './BrIconDocumentLockOutline.vue'
import BrIconDocumentLockSharp from './BrIconDocumentLockSharp.vue'
import BrIconDocumentLock from './BrIconDocumentLock.vue'

export default {
  install(app: App) {
    app.component(BrIconDocumentLockOutline.name, BrIconDocumentLockOutline)
    app.component(BrIconDocumentLockSharp.name, BrIconDocumentLockSharp)
    app.component(BrIconDocumentLock.name, BrIconDocumentLock)
  },
} as Plugin

export {
  BrIconDocumentLockOutline,
  BrIconDocumentLockSharp,
  BrIconDocumentLock,
}
