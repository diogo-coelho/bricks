import { App, Plugin } from 'vue'
import BrIconWalkOutline from './BrIconWalkOutline.vue'
import BrIconWalkSharp from './BrIconWalkSharp.vue'
import BrIconWalk from './BrIconWalk.vue'

export default {
  install(app: App) {
    app.component(BrIconWalkOutline.name, BrIconWalkOutline)
    app.component(BrIconWalkSharp.name, BrIconWalkSharp)
    app.component(BrIconWalk.name, BrIconWalk)
  },
} as Plugin

export { BrIconWalkOutline, BrIconWalkSharp, BrIconWalk }
