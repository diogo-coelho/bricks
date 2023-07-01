import { App, Plugin } from 'vue'
import BrIconTrendingDownOutline from './BrIconTrendingDownOutline.vue'
import BrIconTrendingDownSharp from './BrIconTrendingDownSharp.vue'
import BrIconTrendingDown from './BrIconTrendingDown.vue'

export default {
  install(app: App) {
    app.component(BrIconTrendingDownOutline.name, BrIconTrendingDownOutline)
    app.component(BrIconTrendingDownSharp.name, BrIconTrendingDownSharp)
    app.component(BrIconTrendingDown.name, BrIconTrendingDown)
  },
} as Plugin

export {
  BrIconTrendingDownOutline,
  BrIconTrendingDownSharp,
  BrIconTrendingDown,
}
