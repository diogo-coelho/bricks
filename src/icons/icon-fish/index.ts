import { App, Plugin } from 'vue'
import BrIconFishOutline from './BrIconFishOutline.vue'
import BrIconFishSharp from './BrIconFishSharp.vue'
import BrIconFish from './BrIconFish.vue'

export default {
  install(app: App) {
    app.component(BrIconFishOutline.name, BrIconFishOutline)
    app.component(BrIconFishSharp.name, BrIconFishSharp)
    app.component(BrIconFish.name, BrIconFish)
  },
} as Plugin

export { BrIconFishOutline, BrIconFishSharp, BrIconFish }
