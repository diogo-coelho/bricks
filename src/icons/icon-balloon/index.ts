import { App, Plugin } from 'vue'
import BrIconBalloon from './BrIconBalloon.vue'
import BrIconBalloonOutline from './BrIconBalloonOutline.vue'
import BrIconBalloonSharp from './BrIconBalloonSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBalloon.name, BrIconBalloon)
    app.component(BrIconBalloonOutline.name, BrIconBalloonOutline)
    app.component(BrIconBalloonSharp.name, BrIconBalloonSharp)
  },
} as Plugin

export { BrIconBalloon, BrIconBalloonOutline, BrIconBalloonSharp }
