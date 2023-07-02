import { App, Plugin } from 'vue'
import BrIconDocumentAttachOutline from './BrIconDocumentAttachOutline.vue'
import BrIconDocumentAttachSharp from './BrIconDocumentAttachSharp.vue'
import BrIconDocumentAttach from './BrIconDocumentAttach.vue'

export default {
  install(app: App) {
    app.component(BrIconDocumentAttachOutline.name, BrIconDocumentAttachOutline)
    app.component(BrIconDocumentAttachSharp.name, BrIconDocumentAttachSharp)
    app.component(BrIconDocumentAttach.name, BrIconDocumentAttach)
  },
} as Plugin

export {
  BrIconDocumentAttachOutline,
  BrIconDocumentAttachSharp,
  BrIconDocumentAttach,
}
