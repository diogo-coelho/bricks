import { App, Plugin } from 'vue'
import BrIconVolumeMuteOutline from './BrIconVolumeMuteOutline.vue'
import BrIconVolumeMuteSharp from './BrIconVolumeMuteSharp.vue'
import BrIconVolumeMute from './BrIconVolumeMute.vue'

export default {
  install(app: App) {
    app.component(BrIconVolumeMuteOutline.name, BrIconVolumeMuteOutline)
    app.component(BrIconVolumeMuteSharp.name, BrIconVolumeMuteSharp)
    app.component(BrIconVolumeMute.name, BrIconVolumeMute)
  },
} as Plugin

export { BrIconVolumeMuteOutline, BrIconVolumeMuteSharp, BrIconVolumeMute }
