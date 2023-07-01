import { App, Plugin } from 'vue'
import BrIconStarOutline from './BrIconStarOutline.vue'
import BrIconStarSharp from './BrIconStarSharp.vue'
import BrIconStar from './BrIconStar.vue'

export default {
  install(app: App) {
    app.component(BrIconStarOutline.name, BrIconStarOutline)
    app.component(BrIconStarSharp.name, BrIconStarSharp)
    app.component(BrIconStar.name, BrIconStar)
  },
} as Plugin

export { BrIconStarOutline, BrIconStarSharp, BrIconStar }
