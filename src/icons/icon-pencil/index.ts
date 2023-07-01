import { App, Plugin } from 'vue'
import BrIconPencilOutline from './BrIconPencilOutline.vue'
import BrIconPencilSharp from './BrIconPencilSharp.vue'
import BrIconPencil from './BrIconPencil.vue'

export default {
  install(app: App) {
    app.component(BrIconPencilOutline.name, BrIconPencilOutline)
    app.component(BrIconPencilSharp.name, BrIconPencilSharp)
    app.component(BrIconPencil.name, BrIconPencil)
  },
} as Plugin

export { BrIconPencilOutline, BrIconPencilSharp, BrIconPencil }
