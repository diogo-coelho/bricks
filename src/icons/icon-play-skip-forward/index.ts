import { App, Plugin } from 'vue'
import BrIconPlaySkipForwardOutline from './BrIconPlaySkipForwardOutline.vue'
import BrIconPlaySkipForwardSharp from './BrIconPlaySkipForwardSharp.vue'
import BrIconPlaySkipForward from './BrIconPlaySkipForward.vue'

export default {
  install(app: App) {
    app.component(
      BrIconPlaySkipForwardOutline.name,
      BrIconPlaySkipForwardOutline
    )
    app.component(BrIconPlaySkipForwardSharp.name, BrIconPlaySkipForwardSharp)
    app.component(BrIconPlaySkipForward.name, BrIconPlaySkipForward)
  },
} as Plugin

export {
  BrIconPlaySkipForwardOutline,
  BrIconPlaySkipForwardSharp,
  BrIconPlaySkipForward,
}
