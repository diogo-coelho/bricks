import { App, Plugin } from 'vue'
import BrIconEllipsisVerticalOutline from './BrIconEllipsisVerticalOutline.vue'
import BrIconEllipsisVerticalSharp from './BrIconEllipsisVerticalSharp.vue'
import BrIconEllipsisVertical from './BrIconEllipsisVertical.vue'

export default {
  install(app: App) {
    app.component(
      BrIconEllipsisVerticalOutline.name,
      BrIconEllipsisVerticalOutline
    )
    app.component(BrIconEllipsisVerticalSharp.name, BrIconEllipsisVerticalSharp)
    app.component(BrIconEllipsisVertical.name, BrIconEllipsisVertical)
  },
} as Plugin

export {
  BrIconEllipsisVerticalOutline,
  BrIconEllipsisVerticalSharp,
  BrIconEllipsisVertical,
}
