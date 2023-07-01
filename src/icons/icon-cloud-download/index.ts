import { App, Plugin } from 'vue'
import BrIconCloudDownloadOutline from './BrIconCloudDownloadOutline.vue'
import BrIconCloudDownloadSharp from './BrIconCloudDownloadSharp.vue'
import BrIconCloudDownload from './BrIconCloudDownload.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudDownloadOutline.name, BrIconCloudDownloadOutline)
    app.component(BrIconCloudDownloadSharp.name, BrIconCloudDownloadSharp)
    app.component(BrIconCloudDownload.name, BrIconCloudDownload)
  },
} as Plugin

export {
  BrIconCloudDownloadOutline,
  BrIconCloudDownloadSharp,
  BrIconCloudDownload,
}
