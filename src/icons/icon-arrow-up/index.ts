import { App, Plugin } from 'vue'
import BrIconArrowUp from './BrIconArrowUp.vue'
import BrIconArrowUpOutline from './BrIconArrowUpOutline.vue'
import BrIconArrowUpSharp from './BrIconArrowUpSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowUp.name, BrIconArrowUp)
    app.component(BrIconArrowUpOutline.name, BrIconArrowUpOutline)
    app.component(BrIconArrowUpSharp.name, BrIconArrowUpSharp)
  },
} as Plugin

export { BrIconArrowUp, BrIconArrowUpOutline, BrIconArrowUpSharp }
