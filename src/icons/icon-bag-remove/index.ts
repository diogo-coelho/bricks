import { App, Plugin } from 'vue'
import BrIconBagRemove from './BrIconBagRemove.vue'
import BrIconBagRemoveOutline from './BrIconBagRemoveOutline.vue'
import BrIconBagRemoveSharp from './BrIconBagRemoveSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBagRemove.name, BrIconBagRemove)
    app.component(BrIconBagRemoveOutline.name, BrIconBagRemoveOutline)
    app.component(BrIconBagRemoveSharp.name, BrIconBagRemoveSharp)
  },
} as Plugin

export { BrIconBagRemove, BrIconBagRemoveOutline, BrIconBagRemoveSharp }
