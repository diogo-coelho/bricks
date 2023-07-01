import { App, Plugin } from 'vue'
import BrIconCloudUploadOutline from './BrIconCloudUploadOutline.vue'
import BrIconCloudUploadSharp from './BrIconCloudUploadSharp.vue'
import BrIconCloudUpload from './BrIconCloudUpload.vue'

export default {
  install(app: App) {
    app.component(BrIconCloudUploadOutline.name, BrIconCloudUploadOutline)
    app.component(BrIconCloudUploadSharp.name, BrIconCloudUploadSharp)
    app.component(BrIconCloudUpload.name, BrIconCloudUpload)
  },
} as Plugin

export { BrIconCloudUploadOutline, BrIconCloudUploadSharp, BrIconCloudUpload }
