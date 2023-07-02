import { App, Plugin } from 'vue'
import BrIconPlayOutline from './BrIconPlayOutline.vue'
import BrIconPlaySharp from './BrIconPlaySharp.vue'
import BrIconPlay from './BrIconPlay.vue'

export default {
  install(app: App) {
    app.component(BrIconPlayOutline.name, BrIconPlayOutline)
    app.component(BrIconPlaySharp.name, BrIconPlaySharp)
    app.component(BrIconPlay.name, BrIconPlay)
  },
} as Plugin

export { BrIconPlayOutline, BrIconPlaySharp, BrIconPlay }
