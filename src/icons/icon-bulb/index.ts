import { App, Plugin } from 'vue'
import BrIconBulbOutline from './BrIconBulbOutline.vue'
import BrIconBulbSharp from './BrIconBulbSharp.vue'
import BrIconBulb from './BrIconBulb.vue'

export default {
  install(app: App) {
    app.component(BrIconBulbOutline.name, BrIconBulbOutline)
    app.component(BrIconBulbSharp.name, BrIconBulbSharp)
    app.component(BrIconBulb.name, BrIconBulb)
  },
} as Plugin

export { BrIconBulbOutline, BrIconBulbSharp, BrIconBulb }
