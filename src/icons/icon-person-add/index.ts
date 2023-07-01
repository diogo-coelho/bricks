import { App, Plugin } from 'vue'
import BrIconPersonAddOutline from './BrIconPersonAddOutline.vue'
import BrIconPersonAddSharp from './BrIconPersonAddSharp.vue'
import BrIconPersonAdd from './BrIconPersonAdd.vue'

export default {
  install(app: App) {
    app.component(BrIconPersonAddOutline.name, BrIconPersonAddOutline)
    app.component(BrIconPersonAddSharp.name, BrIconPersonAddSharp)
    app.component(BrIconPersonAdd.name, BrIconPersonAdd)
  },
} as Plugin

export { BrIconPersonAddOutline, BrIconPersonAddSharp, BrIconPersonAdd }
