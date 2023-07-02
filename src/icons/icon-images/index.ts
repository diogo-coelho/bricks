import { App, Plugin } from 'vue'
import BrIconImagesOutline from './BrIconImagesOutline.vue'
import BrIconImagesSharp from './BrIconImagesSharp.vue'
import BrIconImages from './BrIconImages.vue'

export default {
  install(app: App) {
    app.component(BrIconImagesOutline.name, BrIconImagesOutline)
    app.component(BrIconImagesSharp.name, BrIconImagesSharp)
    app.component(BrIconImages.name, BrIconImages)
  },
} as Plugin

export { BrIconImagesOutline, BrIconImagesSharp, BrIconImages }
