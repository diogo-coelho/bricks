import { App, Plugin } from 'vue'
import BrIconCellularOutline from './BrIconCellularOutline.vue'
import BrIconCellularSharp from './BrIconCellularSharp.vue'
import BrIconCellular from './BrIconCellular.vue'

export default {
  install(app: App) {
    app.component(BrIconCellularOutline.name, BrIconCellularOutline)
    app.component(BrIconCellularSharp.name, BrIconCellularSharp)
    app.component(BrIconCellular.name, BrIconCellular)
  },
} as Plugin

export { BrIconCellularOutline, BrIconCellularSharp, BrIconCellular }
