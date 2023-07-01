import { App, Plugin } from 'vue'
import BrIconCubeOutline from './BrIconCubeOutline.vue'
import BrIconCubeSharp from './BrIconCubeSharp.vue'
import BrIconCube from './BrIconCube.vue'

export default {
  install(app: App) {
    app.component(BrIconCubeOutline.name, BrIconCubeOutline)
    app.component(BrIconCubeSharp.name, BrIconCubeSharp)
    app.component(BrIconCube.name, BrIconCube)
  },
} as Plugin

export { BrIconCubeOutline, BrIconCubeSharp, BrIconCube }
