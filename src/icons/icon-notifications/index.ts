import { App, Plugin } from 'vue'
import BrIconNotificationsOutline from './BrIconNotificationsOutline.vue'
import BrIconNotificationsSharp from './BrIconNotificationsSharp.vue'
import BrIconNotifications from './BrIconNotifications.vue'

export default {
  install(app: App) {
    app.component(BrIconNotificationsOutline.name, BrIconNotificationsOutline)
    app.component(BrIconNotificationsSharp.name, BrIconNotificationsSharp)
    app.component(BrIconNotifications.name, BrIconNotifications)
  },
} as Plugin

export {
  BrIconNotificationsOutline,
  BrIconNotificationsSharp,
  BrIconNotifications,
}
