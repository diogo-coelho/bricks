import { App, Plugin } from 'vue'
import BrIconFileTrayFullOutline from './BrIconFileTrayFullOutline.vue'
import BrIconFileTrayFullSharp from './BrIconFileTrayFullSharp.vue'
import BrIconFileTrayFull from './BrIconFileTrayFull.vue'

export default {
  install(app: App) {
    app.component(BrIconFileTrayFullOutline.name, BrIconFileTrayFullOutline)
    app.component(BrIconFileTrayFullSharp.name, BrIconFileTrayFullSharp)
    app.component(BrIconFileTrayFull.name, BrIconFileTrayFull)
  },
} as Plugin

export {
  BrIconFileTrayFullOutline,
  BrIconFileTrayFullSharp,
  BrIconFileTrayFull,
}
