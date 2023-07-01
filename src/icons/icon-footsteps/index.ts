import { App, Plugin } from 'vue'
import BrIconFootstepsOutline from './BrIconFootstepsOutline.vue'
import BrIconFootstepsSharp from './BrIconFootstepsSharp.vue'
import BrIconFootsteps from './BrIconFootsteps.vue'

export default {
  install(app: App) {
    app.component(BrIconFootstepsOutline.name, BrIconFootstepsOutline)
    app.component(BrIconFootstepsSharp.name, BrIconFootstepsSharp)
    app.component(BrIconFootsteps.name, BrIconFootsteps)
  },
} as Plugin

export { BrIconFootstepsOutline, BrIconFootstepsSharp, BrIconFootsteps }
