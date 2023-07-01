import { App, Plugin } from 'vue'
import BrIconNotificationsCircleOutline from './BrIconNotificationsCircleOutline.vue'
import BrIconNotificationsCircleSharp from './BrIconNotificationsCircleSharp.vue'
import BrIconNotificationsCircle from './BrIconNotificationsCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconNotificationsCircleOutline.name,
      BrIconNotificationsCircleOutline
    )
    app.component(
      BrIconNotificationsCircleSharp.name,
      BrIconNotificationsCircleSharp
    )
    app.component(BrIconNotificationsCircle.name, BrIconNotificationsCircle)
  },
} as Plugin

export {
  BrIconNotificationsCircleOutline,
  BrIconNotificationsCircleSharp,
  BrIconNotificationsCircle,
}
