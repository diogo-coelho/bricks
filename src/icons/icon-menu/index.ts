import { App, Plugin } from 'vue'
import BrIconMenuOutline from './BrIconMenuOutline.vue'
import BrIconMenuSharp from './BrIconMenuSharp.vue'
import BrIconMenu from './BrIconMenu.vue'

export default {
  install(app: App) {
    app.component(BrIconMenuOutline.name, BrIconMenuOutline)
    app.component(BrIconMenuSharp.name, BrIconMenuSharp)
    app.component(BrIconMenu.name, BrIconMenu)
  },
} as Plugin

export { BrIconMenuOutline, BrIconMenuSharp, BrIconMenu }
