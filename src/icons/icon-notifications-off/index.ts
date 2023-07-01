import { App, Plugin } from 'vue'
import BrIconNotificationsOffOutline from './BrIconNotificationsOffOutline.vue'
import BrIconNotificationsOffSharp from './BrIconNotificationsOffSharp.vue'
import BrIconNotificationsOff from './BrIconNotificationsOff.vue'

export default {
  install(app: App) {
    app.component(
      BrIconNotificationsOffOutline.name,
      BrIconNotificationsOffOutline
    )
    app.component(BrIconNotificationsOffSharp.name, BrIconNotificationsOffSharp)
    app.component(BrIconNotificationsOff.name, BrIconNotificationsOff)
  },
} as Plugin

export {
  BrIconNotificationsOffOutline,
  BrIconNotificationsOffSharp,
  BrIconNotificationsOff,
}
