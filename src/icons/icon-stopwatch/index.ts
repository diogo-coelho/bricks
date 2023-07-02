import { App, Plugin } from 'vue'
import BrIconStopwatchOutline from './BrIconStopwatchOutline.vue'
import BrIconStopwatchSharp from './BrIconStopwatchSharp.vue'
import BrIconStopwatch from './BrIconStopwatch.vue'

export default {
  install(app: App) {
    app.component(BrIconStopwatchOutline.name, BrIconStopwatchOutline)
    app.component(BrIconStopwatchSharp.name, BrIconStopwatchSharp)
    app.component(BrIconStopwatch.name, BrIconStopwatch)
  },
} as Plugin

export { BrIconStopwatchOutline, BrIconStopwatchSharp, BrIconStopwatch }
