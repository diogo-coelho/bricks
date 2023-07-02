import { App, Plugin } from 'vue'
import BrIconTrashBinOutline from './BrIconTrashBinOutline.vue'
import BrIconTrashBinSharp from './BrIconTrashBinSharp.vue'
import BrIconTrashBin from './BrIconTrashBin.vue'

export default {
  install(app: App) {
    app.component(BrIconTrashBinOutline.name, BrIconTrashBinOutline)
    app.component(BrIconTrashBinSharp.name, BrIconTrashBinSharp)
    app.component(BrIconTrashBin.name, BrIconTrashBin)
  },
} as Plugin

export { BrIconTrashBinOutline, BrIconTrashBinSharp, BrIconTrashBin }
