import { App, Plugin } from 'vue'
import BrIconEllipsisVerticalCircleOutline from './BrIconEllipsisVerticalCircleOutline.vue'
import BrIconEllipsisVerticalCircleSharp from './BrIconEllipsisVerticalCircleSharp.vue'
import BrIconEllipsisVerticalCircle from './BrIconEllipsisVerticalCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconEllipsisVerticalCircleOutline.name,
      BrIconEllipsisVerticalCircleOutline
    )
    app.component(
      BrIconEllipsisVerticalCircleSharp.name,
      BrIconEllipsisVerticalCircleSharp
    )
    app.component(
      BrIconEllipsisVerticalCircle.name,
      BrIconEllipsisVerticalCircle
    )
  },
} as Plugin

export {
  BrIconEllipsisVerticalCircleOutline,
  BrIconEllipsisVerticalCircleSharp,
  BrIconEllipsisVerticalCircle,
}
