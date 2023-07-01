import { App, Plugin } from 'vue'
import BrIconFingerPrintOutline from './BrIconFingerPrintOutline.vue'
import BrIconFingerPrintSharp from './BrIconFingerPrintSharp.vue'
import BrIconFingerPrint from './BrIconFingerPrint.vue'

export default {
  install(app: App) {
    app.component(BrIconFingerPrintOutline.name, BrIconFingerPrintOutline)
    app.component(BrIconFingerPrintSharp.name, BrIconFingerPrintSharp)
    app.component(BrIconFingerPrint.name, BrIconFingerPrint)
  },
} as Plugin

export { BrIconFingerPrintOutline, BrIconFingerPrintSharp, BrIconFingerPrint }
