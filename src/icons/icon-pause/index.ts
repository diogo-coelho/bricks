import { App, Plugin } from 'vue'
import BrIconPauseOutline from './BrIconPauseOutline.vue'
import BrIconPauseSharp from './BrIconPauseSharp.vue'
import BrIconPause from './BrIconPause.vue'

export default {
  install(app: App) {
    app.component(BrIconPauseOutline.name, BrIconPauseOutline)
    app.component(BrIconPauseSharp.name, BrIconPauseSharp)
    app.component(BrIconPause.name, BrIconPause)
  },
} as Plugin

export { BrIconPauseOutline, BrIconPauseSharp, BrIconPause }
