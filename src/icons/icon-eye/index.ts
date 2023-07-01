import { App, Plugin } from 'vue'
import BrIconEyeOutline from './BrIconEyeOutline.vue'
import BrIconEyeSharp from './BrIconEyeSharp.vue'
import BrIconEye from './BrIconEye.vue'

export default {
  install(app: App) {
    app.component(BrIconEyeOutline.name, BrIconEyeOutline)
    app.component(BrIconEyeSharp.name, BrIconEyeSharp)
    app.component(BrIconEye.name, BrIconEye)
  },
} as Plugin

export { BrIconEyeOutline, BrIconEyeSharp, BrIconEye }
