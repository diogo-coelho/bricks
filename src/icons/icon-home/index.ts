import { App, Plugin } from 'vue'
import BrIconHomeOutline from './BrIconHomeOutline.vue'
import BrIconHomeSharp from './BrIconHomeSharp.vue'
import BrIconHome from './BrIconHome.vue'

export default {
  install(app: App) {
    app.component(BrIconHomeOutline.name, BrIconHomeOutline)
    app.component(BrIconHomeSharp.name, BrIconHomeSharp)
    app.component(BrIconHome.name, BrIconHome)
  },
} as Plugin

export { BrIconHomeOutline, BrIconHomeSharp, BrIconHome }
