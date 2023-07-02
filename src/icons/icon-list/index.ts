import { App, Plugin } from 'vue'
import BrIconListOutline from './BrIconListOutline.vue'
import BrIconListSharp from './BrIconListSharp.vue'
import BrIconList from './BrIconList.vue'

export default {
  install(app: App) {
    app.component(BrIconListOutline.name, BrIconListOutline)
    app.component(BrIconListSharp.name, BrIconListSharp)
    app.component(BrIconList.name, BrIconList)
  },
} as Plugin

export { BrIconListOutline, BrIconListSharp, BrIconList }
