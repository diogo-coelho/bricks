import { App, Plugin } from 'vue'
import BrIconShuffleOutline from './BrIconShuffleOutline.vue'
import BrIconShuffleSharp from './BrIconShuffleSharp.vue'
import BrIconShuffle from './BrIconShuffle.vue'

export default {
  install(app: App) {
    app.component(BrIconShuffleOutline.name, BrIconShuffleOutline)
    app.component(BrIconShuffleSharp.name, BrIconShuffleSharp)
    app.component(BrIconShuffle.name, BrIconShuffle)
  },
} as Plugin

export { BrIconShuffleOutline, BrIconShuffleSharp, BrIconShuffle }
