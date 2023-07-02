import { App, Plugin } from 'vue'
import BrIconAdd from './BrIconAdd.vue'
import BrIconAddOutline from './BrIconAddOutline.vue'
import BrIconAddSharp from './BrIconAddSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAdd.name, BrIconAdd)
    app.component(BrIconAddOutline.name, BrIconAddOutline)
    app.component(BrIconAddSharp.name, BrIconAddSharp)
  },
} as Plugin

export { BrIconAdd, BrIconAddOutline, BrIconAddSharp }
