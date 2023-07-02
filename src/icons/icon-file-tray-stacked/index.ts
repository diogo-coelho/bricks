import { App, Plugin } from 'vue'
import BrIconFileTrayStackedOutline from './BrIconFileTrayStackedOutline.vue'
import BrIconFileTrayStackedSharp from './BrIconFileTrayStackedSharp.vue'
import BrIconFileTrayStacked from './BrIconFileTrayStacked.vue'

export default {
  install(app: App) {
    app.component(
      BrIconFileTrayStackedOutline.name,
      BrIconFileTrayStackedOutline
    )
    app.component(BrIconFileTrayStackedSharp.name, BrIconFileTrayStackedSharp)
    app.component(BrIconFileTrayStacked.name, BrIconFileTrayStacked)
  },
} as Plugin

export {
  BrIconFileTrayStackedOutline,
  BrIconFileTrayStackedSharp,
  BrIconFileTrayStacked,
}
