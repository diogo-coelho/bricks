import { App, Plugin } from 'vue'
import BrIconSquareOutline from './BrIconSquareOutline.vue'
import BrIconSquareSharp from './BrIconSquareSharp.vue'
import BrIconSquare from './BrIconSquare.vue'

export default {
  install(app: App) {
    app.component(BrIconSquareOutline.name, BrIconSquareOutline)
    app.component(BrIconSquareSharp.name, BrIconSquareSharp)
    app.component(BrIconSquare.name, BrIconSquare)
  },
} as Plugin

export { BrIconSquareOutline, BrIconSquareSharp, BrIconSquare }
