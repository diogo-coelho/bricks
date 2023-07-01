import { App, Plugin } from 'vue'
import BrIconEllipsisHorizontalCircleOutline from './BrIconEllipsisHorizontalCircleOutline.vue'
import BrIconEllipsisHorizontalCircleSharp from './BrIconEllipsisHorizontalCircleSharp.vue'
import BrIconEllipsisHorizontalCircle from './BrIconEllipsisHorizontalCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconEllipsisHorizontalCircleOutline.name,
      BrIconEllipsisHorizontalCircleOutline
    )
    app.component(
      BrIconEllipsisHorizontalCircleSharp.name,
      BrIconEllipsisHorizontalCircleSharp
    )
    app.component(
      BrIconEllipsisHorizontalCircle.name,
      BrIconEllipsisHorizontalCircle
    )
  },
} as Plugin

export {
  BrIconEllipsisHorizontalCircleOutline,
  BrIconEllipsisHorizontalCircleSharp,
  BrIconEllipsisHorizontalCircle,
}
