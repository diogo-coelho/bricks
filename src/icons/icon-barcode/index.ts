import { App, Plugin } from 'vue'
import BrIconBarcodeOutline from './BrIconBarcodeOutline.vue'
import BrIconBarcodeSharp from './BrIconBarcodeSharp.vue'
import BrIconBarcode from './BrIconBarcode.vue'

export default {
  install(app: App) {
    app.component(BrIconBarcodeOutline.name, BrIconBarcodeOutline)
    app.component(BrIconBarcodeSharp.name, BrIconBarcodeSharp)
    app.component(BrIconBarcode.name, BrIconBarcode)
  },
} as Plugin

export { BrIconBarcodeOutline, BrIconBarcodeSharp, BrIconBarcode }
