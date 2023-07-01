import { App, Plugin } from 'vue'
import BrIconDocumentOutline from './BrIconDocumentOutline.vue'
import BrIconDocumentSharp from './BrIconDocumentSharp.vue'
import BrIconDocument from './BrIconDocument.vue'

export default {
  install(app: App) {
    app.component(BrIconDocumentOutline.name, BrIconDocumentOutline)
    app.component(BrIconDocumentSharp.name, BrIconDocumentSharp)
    app.component(BrIconDocument.name, BrIconDocument)
  },
} as Plugin

export { BrIconDocumentOutline, BrIconDocumentSharp, BrIconDocument }
