import { App, Plugin } from 'vue'
import BrIconFlagOutline from './BrIconFlagOutline.vue'
import BrIconFlagSharp from './BrIconFlagSharp.vue'
import BrIconFlag from './BrIconFlag.vue'

export default {
  install(app: App) {
    app.component(BrIconFlagOutline.name, BrIconFlagOutline)
    app.component(BrIconFlagSharp.name, BrIconFlagSharp)
    app.component(BrIconFlag.name, BrIconFlag)
  },
} as Plugin

export { BrIconFlagOutline, BrIconFlagSharp, BrIconFlag }
