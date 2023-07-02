import { App, Plugin } from 'vue'
import BrIconExtensionPuzzleOutline from './BrIconExtensionPuzzleOutline.vue'
import BrIconExtensionPuzzleSharp from './BrIconExtensionPuzzleSharp.vue'
import BrIconExtensionPuzzle from './BrIconExtensionPuzzle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconExtensionPuzzleOutline.name,
      BrIconExtensionPuzzleOutline
    )
    app.component(BrIconExtensionPuzzleSharp.name, BrIconExtensionPuzzleSharp)
    app.component(BrIconExtensionPuzzle.name, BrIconExtensionPuzzle)
  },
} as Plugin

export {
  BrIconExtensionPuzzleOutline,
  BrIconExtensionPuzzleSharp,
  BrIconExtensionPuzzle,
}
