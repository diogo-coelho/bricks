import { App, Plugin } from 'vue'
import BrIconCameraOutline from './BrIconCameraOutline.vue'
import BrIconCameraSharp from './BrIconCameraSharp.vue'
import BrIconCamera from './BrIconCamera.vue'

export default {
  install(app: App) {
    app.component(BrIconCameraOutline.name, BrIconCameraOutline)
    app.component(BrIconCameraSharp.name, BrIconCameraSharp)
    app.component(BrIconCamera.name, BrIconCamera)
  },
} as Plugin

export { BrIconCameraOutline, BrIconCameraSharp, BrIconCamera }
