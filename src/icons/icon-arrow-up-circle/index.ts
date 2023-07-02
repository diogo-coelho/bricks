import { App, Plugin } from 'vue'
import BrIconArrowUpCircle from './BrIconArrowUpCircle.vue'
import BrIconArrowUpCircleOutline from './BrIconArrowUpCircleOutline.vue'
import BrIconArrowUpCircleSharp from './BrIconArrowUpCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowUpCircle.name, BrIconArrowUpCircle)
    app.component(BrIconArrowUpCircleOutline.name, BrIconArrowUpCircleOutline)
    app.component(BrIconArrowUpCircleSharp.name, BrIconArrowUpCircleSharp)
  },
} as Plugin

export {
  BrIconArrowUpCircle,
  BrIconArrowUpCircleOutline,
  BrIconArrowUpCircleSharp,
}
