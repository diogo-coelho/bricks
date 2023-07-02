import { App, Plugin } from 'vue'
import BrIconPlayBackOutline from './BrIconPlayBackOutline.vue'
import BrIconPlayBackSharp from './BrIconPlayBackSharp.vue'
import BrIconPlayBack from './BrIconPlayBack.vue'

export default {
  install(app: App) {
    app.component(BrIconPlayBackOutline.name, BrIconPlayBackOutline)
    app.component(BrIconPlayBackSharp.name, BrIconPlayBackSharp)
    app.component(BrIconPlayBack.name, BrIconPlayBack)
  },
} as Plugin

export { BrIconPlayBackOutline, BrIconPlayBackSharp, BrIconPlayBack }
