import { App, Plugin } from 'vue'
import BrIconStarHalfOutline from './BrIconStarHalfOutline.vue'
import BrIconStarHalfSharp from './BrIconStarHalfSharp.vue'
import BrIconStarHalf from './BrIconStarHalf.vue'

export default {
  install(app: App) {
    app.component(BrIconStarHalfOutline.name, BrIconStarHalfOutline)
    app.component(BrIconStarHalfSharp.name, BrIconStarHalfSharp)
    app.component(BrIconStarHalf.name, BrIconStarHalf)
  },
} as Plugin

export { BrIconStarHalfOutline, BrIconStarHalfSharp, BrIconStarHalf }
