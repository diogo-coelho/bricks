import { App, Plugin } from 'vue'
import BrIconBagCheck from './BrIconBagCheck.vue'
import BrIconBagCheckOutline from './BrIconBagCheckOutline.vue'
import BrIconBagCheckSharp from './BrIconBagCheckSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBagCheck.name, BrIconBagCheck)
    app.component(BrIconBagCheckOutline.name, BrIconBagCheckOutline)
    app.component(BrIconBagCheckSharp.name, BrIconBagCheckSharp)
  },
} as Plugin

export { BrIconBagCheck, BrIconBagCheckOutline, BrIconBagCheckSharp }
