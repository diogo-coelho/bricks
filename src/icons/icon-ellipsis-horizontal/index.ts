import { App, Plugin } from 'vue'
import BrIconEllipsisHorizontalOutline from './BrIconEllipsisHorizontalOutline.vue'
import BrIconEllipsisHorizontalSharp from './BrIconEllipsisHorizontalSharp.vue'
import BrIconEllipsisHorizontal from './BrIconEllipsisHorizontal.vue'

export default {
  install(app: App) {
    app.component(
      BrIconEllipsisHorizontalOutline.name,
      BrIconEllipsisHorizontalOutline
    )
    app.component(
      BrIconEllipsisHorizontalSharp.name,
      BrIconEllipsisHorizontalSharp
    )
    app.component(BrIconEllipsisHorizontal.name, BrIconEllipsisHorizontal)
  },
} as Plugin

export {
  BrIconEllipsisHorizontalOutline,
  BrIconEllipsisHorizontalSharp,
  BrIconEllipsisHorizontal,
}
