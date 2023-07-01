import { App, Plugin } from 'vue'
import BrIconHeartDislikeCircleOutline from './BrIconHeartDislikeCircleOutline.vue'
import BrIconHeartDislikeCircleSharp from './BrIconHeartDislikeCircleSharp.vue'
import BrIconHeartDislikeCircle from './BrIconHeartDislikeCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconHeartDislikeCircleOutline.name,
      BrIconHeartDislikeCircleOutline
    )
    app.component(
      BrIconHeartDislikeCircleSharp.name,
      BrIconHeartDislikeCircleSharp
    )
    app.component(BrIconHeartDislikeCircle.name, BrIconHeartDislikeCircle)
  },
} as Plugin

export {
  BrIconHeartDislikeCircleOutline,
  BrIconHeartDislikeCircleSharp,
  BrIconHeartDislikeCircle,
}
