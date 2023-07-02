import { App, Plugin } from 'vue'
import BrIconVolumeLowOutline from './BrIconVolumeLowOutline.vue'
import BrIconVolumeLowSharp from './BrIconVolumeLowSharp.vue'
import BrIconVolumeLow from './BrIconVolumeLow.vue'

export default {
  install(app: App) {
    app.component(BrIconVolumeLowOutline.name, BrIconVolumeLowOutline)
    app.component(BrIconVolumeLowSharp.name, BrIconVolumeLowSharp)
    app.component(BrIconVolumeLow.name, BrIconVolumeLow)
  },
} as Plugin

export { BrIconVolumeLowOutline, BrIconVolumeLowSharp, BrIconVolumeLow }
