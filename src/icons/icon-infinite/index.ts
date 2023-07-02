import { App, Plugin } from 'vue'
import BrIconInfiniteOutline from './BrIconInfiniteOutline.vue'
import BrIconInfiniteSharp from './BrIconInfiniteSharp.vue'
import BrIconInfinite from './BrIconInfinite.vue'

export default {
  install(app: App) {
    app.component(BrIconInfiniteOutline.name, BrIconInfiniteOutline)
    app.component(BrIconInfiniteSharp.name, BrIconInfiniteSharp)
    app.component(BrIconInfinite.name, BrIconInfinite)
  },
} as Plugin

export { BrIconInfiniteOutline, BrIconInfiniteSharp, BrIconInfinite }
