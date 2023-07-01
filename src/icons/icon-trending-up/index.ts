import { App, Plugin } from 'vue'
import BrIconTrendingUpOutline from './BrIconTrendingUpOutline.vue'
import BrIconTrendingUpSharp from './BrIconTrendingUpSharp.vue'
import BrIconTrendingUp from './BrIconTrendingUp.vue'

export default {
  install(app: App) {
    app.component(BrIconTrendingUpOutline.name, BrIconTrendingUpOutline)
    app.component(BrIconTrendingUpSharp.name, BrIconTrendingUpSharp)
    app.component(BrIconTrendingUp.name, BrIconTrendingUp)
  },
} as Plugin

export { BrIconTrendingUpOutline, BrIconTrendingUpSharp, BrIconTrendingUp }
