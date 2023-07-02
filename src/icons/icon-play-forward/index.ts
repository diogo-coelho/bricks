import { App, Plugin } from 'vue'
import BrIconPlayForwardOutline from './BrIconPlayForwardOutline.vue'
import BrIconPlayForwardSharp from './BrIconPlayForwardSharp.vue'
import BrIconPlayForward from './BrIconPlayForward.vue'

export default {
  install(app: App) {
    app.component(BrIconPlayForwardOutline.name, BrIconPlayForwardOutline)
    app.component(BrIconPlayForwardSharp.name, BrIconPlayForwardSharp)
    app.component(BrIconPlayForward.name, BrIconPlayForward)
  },
} as Plugin

export { BrIconPlayForwardOutline, BrIconPlayForwardSharp, BrIconPlayForward }
