import { App, Plugin } from 'vue'
import BrIconGolfOutline from './BrIconGolfOutline.vue'
import BrIconGolfSharp from './BrIconGolfSharp.vue'
import BrIconGolf from './BrIconGolf.vue'

export default {
  install(app: App) {
    app.component(BrIconGolfOutline.name, BrIconGolfOutline)
    app.component(BrIconGolfSharp.name, BrIconGolfSharp)
    app.component(BrIconGolf.name, BrIconGolf)
  },
} as Plugin

export { BrIconGolfOutline, BrIconGolfSharp, BrIconGolf }
