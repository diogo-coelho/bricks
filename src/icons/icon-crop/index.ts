import { App, Plugin } from 'vue'
import BrIconCropOutline from './BrIconCropOutline.vue'
import BrIconCropSharp from './BrIconCropSharp.vue'
import BrIconCrop from './BrIconCrop.vue'

export default {
  install(app: App) {
    app.component(BrIconCropOutline.name, BrIconCropOutline)
    app.component(BrIconCropSharp.name, BrIconCropSharp)
    app.component(BrIconCrop.name, BrIconCrop)
  },
} as Plugin

export { BrIconCropOutline, BrIconCropSharp, BrIconCrop }
