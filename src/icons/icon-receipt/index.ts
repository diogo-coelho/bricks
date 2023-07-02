import { App, Plugin } from 'vue'
import BrIconReceiptOutline from './BrIconReceiptOutline.vue'
import BrIconReceiptSharp from './BrIconReceiptSharp.vue'
import BrIconReceipt from './BrIconReceipt.vue'

export default {
  install(app: App) {
    app.component(BrIconReceiptOutline.name, BrIconReceiptOutline)
    app.component(BrIconReceiptSharp.name, BrIconReceiptSharp)
    app.component(BrIconReceipt.name, BrIconReceipt)
  },
} as Plugin

export { BrIconReceiptOutline, BrIconReceiptSharp, BrIconReceipt }
