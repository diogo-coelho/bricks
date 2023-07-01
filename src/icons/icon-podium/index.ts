import { App, Plugin } from 'vue'
import BrIconPodiumOutline from './BrIconPodiumOutline.vue'
import BrIconPodiumSharp from './BrIconPodiumSharp.vue'
import BrIconPodium from './BrIconPodium.vue'

export default {
  install(app: App) {
    app.component(BrIconPodiumOutline.name, BrIconPodiumOutline)
    app.component(BrIconPodiumSharp.name, BrIconPodiumSharp)
    app.component(BrIconPodium.name, BrIconPodium)
  },
} as Plugin

export { BrIconPodiumOutline, BrIconPodiumSharp, BrIconPodium }
