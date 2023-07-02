import { App, Plugin } from 'vue'
import BrIconFileTrayOutline from './BrIconFileTrayOutline.vue'
import BrIconFileTraySharp from './BrIconFileTraySharp.vue'
import BrIconFileTray from './BrIconFileTray.vue'

export default {
  install(app: App) {
    app.component(BrIconFileTrayOutline.name, BrIconFileTrayOutline)
    app.component(BrIconFileTraySharp.name, BrIconFileTraySharp)
    app.component(BrIconFileTray.name, BrIconFileTray)
  },
} as Plugin

export { BrIconFileTrayOutline, BrIconFileTraySharp, BrIconFileTray }
