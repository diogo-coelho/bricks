import { App, Plugin } from 'vue'
import BrIconTrailSignOutline from './BrIconTrailSignOutline.vue'
import BrIconTrailSignSharp from './BrIconTrailSignSharp.vue'
import BrIconTrailSign from './BrIconTrailSign.vue'

export default {
  install(app: App) {
    app.component(BrIconTrailSignOutline.name, BrIconTrailSignOutline)
    app.component(BrIconTrailSignSharp.name, BrIconTrailSignSharp)
    app.component(BrIconTrailSign.name, BrIconTrailSign)
  },
} as Plugin

export { BrIconTrailSignOutline, BrIconTrailSignSharp, BrIconTrailSign }
