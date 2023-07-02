import { App, Plugin } from 'vue'
import BrIconPrintOutline from './BrIconPrintOutline.vue'
import BrIconPrintSharp from './BrIconPrintSharp.vue'
import BrIconPrint from './BrIconPrint.vue'

export default {
  install(app: App) {
    app.component(BrIconPrintOutline.name, BrIconPrintOutline)
    app.component(BrIconPrintSharp.name, BrIconPrintSharp)
    app.component(BrIconPrint.name, BrIconPrint)
  },
} as Plugin

export { BrIconPrintOutline, BrIconPrintSharp, BrIconPrint }
