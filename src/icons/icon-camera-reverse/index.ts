import { App, Plugin } from 'vue'
import BrIconCameraReverseOutline from './BrIconCameraReverseOutline.vue'
import BrIconCameraReverseSharp from './BrIconCameraReverseSharp.vue'
import BrIconCameraReverse from './BrIconCameraReverse.vue'

export default {
  install(app: App) {
    app.component(BrIconCameraReverseOutline.name, BrIconCameraReverseOutline)
    app.component(BrIconCameraReverseSharp.name, BrIconCameraReverseSharp)
    app.component(BrIconCameraReverse.name, BrIconCameraReverse)
  },
} as Plugin

export {
  BrIconCameraReverseOutline,
  BrIconCameraReverseSharp,
  BrIconCameraReverse,
}
