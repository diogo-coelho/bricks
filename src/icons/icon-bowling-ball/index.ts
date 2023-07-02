import { App, Plugin } from 'vue'
import BrIconBowlingBallOutline from './BrIconBowlingBallOutline.vue'
import BrIconBowlingBallSharp from './BrIconBowlingBallSharp.vue'
import BrIconBowlingBall from './BrIconBowlingBall.vue'

export default {
  install(app: App) {
    app.component(BrIconBowlingBallOutline.name, BrIconBowlingBallOutline)
    app.component(BrIconBowlingBallSharp.name, BrIconBowlingBallSharp)
    app.component(BrIconBowlingBall.name, BrIconBowlingBall)
  },
} as Plugin

export { BrIconBowlingBallOutline, BrIconBowlingBallSharp, BrIconBowlingBall }
