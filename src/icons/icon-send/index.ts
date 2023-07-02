import { App, Plugin } from 'vue'
import BrIconSendOutline from './BrIconSendOutline.vue'
import BrIconSendSharp from './BrIconSendSharp.vue'
import BrIconSend from './BrIconSend.vue'

export default {
  install(app: App) {
    app.component(BrIconSendOutline.name, BrIconSendOutline)
    app.component(BrIconSendSharp.name, BrIconSendSharp)
    app.component(BrIconSend.name, BrIconSend)
  },
} as Plugin

export { BrIconSendOutline, BrIconSendSharp, BrIconSend }
