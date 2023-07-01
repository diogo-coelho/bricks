import { App, Plugin } from 'vue'
import BrIconCodeDownloadOutline from './BrIconCodeDownloadOutline.vue'
import BrIconCodeDownloadSharp from './BrIconCodeDownloadSharp.vue'
import BrIconCodeDownload from './BrIconCodeDownload.vue'

export default {
  install(app: App) {
    app.component(BrIconCodeDownloadOutline.name, BrIconCodeDownloadOutline)
    app.component(BrIconCodeDownloadSharp.name, BrIconCodeDownloadSharp)
    app.component(BrIconCodeDownload.name, BrIconCodeDownload)
  },
} as Plugin

export {
  BrIconCodeDownloadOutline,
  BrIconCodeDownloadSharp,
  BrIconCodeDownload,
}
