import { App, Plugin } from 'vue'
import BrIconDownloadOutline from './BrIconDownloadOutline.vue'
import BrIconDownloadSharp from './BrIconDownloadSharp.vue'
import BrIconDownload from './BrIconDownload.vue'

export default {
  install(app: App) {
    app.component(BrIconDownloadOutline.name, BrIconDownloadOutline)
    app.component(BrIconDownloadSharp.name, BrIconDownloadSharp)
    app.component(BrIconDownload.name, BrIconDownload)
  },
} as Plugin

export { BrIconDownloadOutline, BrIconDownloadSharp, BrIconDownload }
