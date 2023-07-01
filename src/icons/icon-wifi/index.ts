import { App, Plugin } from 'vue'
import BrIconWifiOutline from './BrIconWifiOutline.vue'
import BrIconWifiSharp from './BrIconWifiSharp.vue'
import BrIconWifi from './BrIconWifi.vue'

export default {
  install(app: App) {
    app.component(BrIconWifiOutline.name, BrIconWifiOutline)
    app.component(BrIconWifiSharp.name, BrIconWifiSharp)
    app.component(BrIconWifi.name, BrIconWifi)
  },
} as Plugin

export { BrIconWifiOutline, BrIconWifiSharp, BrIconWifi }
