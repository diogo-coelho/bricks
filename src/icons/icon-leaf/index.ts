import { App, Plugin } from 'vue'
import BrIconLeafOutline from './BrIconLeafOutline.vue'
import BrIconLeafSharp from './BrIconLeafSharp.vue'
import BrIconLeaf from './BrIconLeaf.vue'

export default {
  install(app: App) {
    app.component(BrIconLeafOutline.name, BrIconLeafOutline)
    app.component(BrIconLeafSharp.name, BrIconLeafSharp)
    app.component(BrIconLeaf.name, BrIconLeaf)
  },
} as Plugin

export { BrIconLeafOutline, BrIconLeafSharp, BrIconLeaf }
