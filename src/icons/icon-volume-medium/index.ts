import { App, Plugin } from 'vue'
import BrIconVolumeMediumOutline from './BrIconVolumeMediumOutline.vue'
import BrIconVolumeMediumSharp from './BrIconVolumeMediumSharp.vue'
import BrIconVolumeMedium from './BrIconVolumeMedium.vue'

export default {
  install(app: App) {
    app.component(BrIconVolumeMediumOutline.name, BrIconVolumeMediumOutline)
    app.component(BrIconVolumeMediumSharp.name, BrIconVolumeMediumSharp)
    app.component(BrIconVolumeMedium.name, BrIconVolumeMedium)
  },
} as Plugin

export {
  BrIconVolumeMediumOutline,
  BrIconVolumeMediumSharp,
  BrIconVolumeMedium,
}
