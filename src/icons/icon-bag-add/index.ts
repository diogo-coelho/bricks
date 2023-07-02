import { App, Plugin } from 'vue'
import BrIconBagAdd from './BrIconBagAdd.vue'
import BrIconBagAddOutline from './BrIconBagAddOutline.vue'
import BrIconBagAddSharp from './BrIconBagAddSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBagAdd.name, BrIconBagAdd)
    app.component(BrIconBagAddOutline.name, BrIconBagAddOutline)
    app.component(BrIconBagAddSharp.name, BrIconBagAddSharp)
  },
} as Plugin

export { BrIconBagAdd, BrIconBagAddOutline, BrIconBagAddSharp }
