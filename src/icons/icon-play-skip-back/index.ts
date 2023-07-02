import { App, Plugin } from 'vue'
import BrIconPlaySkipBackOutline from './BrIconPlaySkipBackOutline.vue'
import BrIconPlaySkipBackSharp from './BrIconPlaySkipBackSharp.vue'
import BrIconPlaySkipBack from './BrIconPlaySkipBack.vue'

export default {
  install(app: App) {
    app.component(BrIconPlaySkipBackOutline.name, BrIconPlaySkipBackOutline)
    app.component(BrIconPlaySkipBackSharp.name, BrIconPlaySkipBackSharp)
    app.component(BrIconPlaySkipBack.name, BrIconPlaySkipBack)
  },
} as Plugin

export {
  BrIconPlaySkipBackOutline,
  BrIconPlaySkipBackSharp,
  BrIconPlaySkipBack,
}
