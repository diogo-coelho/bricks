import { App, Plugin } from 'vue'
import BrIconAlert from './BrIconAlert.vue'
import BrIconAlertOutline from './BrIconAlertOutline.vue'
import BrIconAlertSharp from './BrIconAlertSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAlert.name, BrIconAlert)
    app.component(BrIconAlertOutline.name, BrIconAlertOutline)
    app.component(BrIconAlertSharp.name, BrIconAlertSharp)
  },
} as Plugin

export { BrIconAlert, BrIconAlertOutline, BrIconAlertSharp }
