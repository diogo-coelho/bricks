import { App, Plugin } from 'vue'
import BrIconManOutline from './BrIconManOutline.vue'
import BrIconManSharp from './BrIconManSharp.vue'
import BrIconMan from './BrIconMan.vue'

export default {
  install(app: App) {
    app.component(BrIconManOutline.name, BrIconManOutline)
    app.component(BrIconManSharp.name, BrIconManSharp)
    app.component(BrIconMan.name, BrIconMan)
  },
} as Plugin

export { BrIconManOutline, BrIconManSharp, BrIconMan }
