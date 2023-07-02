import { App, Plugin } from 'vue'
import BrIconBusinessOutline from './BrIconBusinessOutline.vue'
import BrIconBusinessSharp from './BrIconBusinessSharp.vue'
import BrIconBusiness from './BrIconBusiness.vue'

export default {
  install(app: App) {
    app.component(BrIconBusinessOutline.name, BrIconBusinessOutline)
    app.component(BrIconBusinessSharp.name, BrIconBusinessSharp)
    app.component(BrIconBusiness.name, BrIconBusiness)
  },
} as Plugin

export { BrIconBusinessOutline, BrIconBusinessSharp, BrIconBusiness }
