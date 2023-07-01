import { App, Plugin } from 'vue'
import BrIconQrCodeOutline from './BrIconQrCodeOutline.vue'
import BrIconQrCodeSharp from './BrIconQrCodeSharp.vue'
import BrIconQrCode from './BrIconQrCode.vue'

export default {
  install(app: App) {
    app.component(BrIconQrCodeOutline.name, BrIconQrCodeOutline)
    app.component(BrIconQrCodeSharp.name, BrIconQrCodeSharp)
    app.component(BrIconQrCode.name, BrIconQrCode)
  },
} as Plugin

export { BrIconQrCodeOutline, BrIconQrCodeSharp, BrIconQrCode }
