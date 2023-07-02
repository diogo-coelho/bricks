import { App, Plugin } from 'vue'
import BrIconDocumentsOutline from './BrIconDocumentsOutline.vue'
import BrIconDocumentsSharp from './BrIconDocumentsSharp.vue'
import BrIconDocuments from './BrIconDocuments.vue'

export default {
  install(app: App) {
    app.component(BrIconDocumentsOutline.name, BrIconDocumentsOutline)
    app.component(BrIconDocumentsSharp.name, BrIconDocumentsSharp)
    app.component(BrIconDocuments.name, BrIconDocuments)
  },
} as Plugin

export { BrIconDocumentsOutline, BrIconDocumentsSharp, BrIconDocuments }
