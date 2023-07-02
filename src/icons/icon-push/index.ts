import { App, Plugin } from 'vue'
import BrIconPushOutline from './BrIconPushOutline.vue'
import BrIconPushSharp from './BrIconPushSharp.vue'
import BrIconPush from './BrIconPush.vue'

export default {
  install(app: App) {
    app.component(BrIconPushOutline.name, BrIconPushOutline)
    app.component(BrIconPushSharp.name, BrIconPushSharp)
    app.component(BrIconPush.name, BrIconPush)
  },
} as Plugin

export { BrIconPushOutline, BrIconPushSharp, BrIconPush }
