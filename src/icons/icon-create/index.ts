import { App, Plugin } from 'vue'
import BrIconCreateOutline from './BrIconCreateOutline.vue'
import BrIconCreateSharp from './BrIconCreateSharp.vue'
import BrIconCreate from './BrIconCreate.vue'

export default {
  install(app: App) {
    app.component(BrIconCreateOutline.name, BrIconCreateOutline)
    app.component(BrIconCreateSharp.name, BrIconCreateSharp)
    app.component(BrIconCreate.name, BrIconCreate)
  },
} as Plugin

export { BrIconCreateOutline, BrIconCreateSharp, BrIconCreate }
