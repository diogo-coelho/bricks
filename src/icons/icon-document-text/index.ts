import { App, Plugin } from 'vue'
import BrIconDocumentTextOutline from './BrIconDocumentTextOutline.vue'
import BrIconDocumentTextSharp from './BrIconDocumentTextSharp.vue'
import BrIconDocumentText from './BrIconDocumentText.vue'

export default {
  install(app: App) {
    app.component(BrIconDocumentTextOutline.name, BrIconDocumentTextOutline)
    app.component(BrIconDocumentTextSharp.name, BrIconDocumentTextSharp)
    app.component(BrIconDocumentText.name, BrIconDocumentText)
  },
} as Plugin

export {
  BrIconDocumentTextOutline,
  BrIconDocumentTextSharp,
  BrIconDocumentText,
}
