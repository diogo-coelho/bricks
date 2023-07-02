import { App, Plugin } from 'vue'
import BrIconNotificationsOffCircleOutline from './BrIconNotificationsOffCircleOutline.vue'
import BrIconNotificationsOffCircleSharp from './BrIconNotificationsOffCircleSharp.vue'
import BrIconNotificationsOffCircle from './BrIconNotificationsOffCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconNotificationsOffCircleOutline.name,
      BrIconNotificationsOffCircleOutline
    )
    app.component(
      BrIconNotificationsOffCircleSharp.name,
      BrIconNotificationsOffCircleSharp
    )
    app.component(
      BrIconNotificationsOffCircle.name,
      BrIconNotificationsOffCircle
    )
  },
} as Plugin

export {
  BrIconNotificationsOffCircleOutline,
  BrIconNotificationsOffCircleSharp,
  BrIconNotificationsOffCircle,
}
