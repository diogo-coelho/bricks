import { App, Plugin } from 'vue'
import BrIconLogOutOutline from './BrIconLogOutOutline.vue'
import BrIconLogOutSharp from './BrIconLogOutSharp.vue'
import BrIconLogOut from './BrIconLogOut.vue'

export default {
  install(app: App) {
    app.component(BrIconLogOutOutline.name, BrIconLogOutOutline)
    app.component(BrIconLogOutSharp.name, BrIconLogOutSharp)
    app.component(BrIconLogOut.name, BrIconLogOut)
  },
} as Plugin

export { BrIconLogOutOutline, BrIconLogOutSharp, BrIconLogOut }
