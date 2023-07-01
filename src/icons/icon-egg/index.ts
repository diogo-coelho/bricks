import { App, Plugin } from 'vue'
import BrIconEggOutline from './BrIconEggOutline.vue'
import BrIconEggSharp from './BrIconEggSharp.vue'
import BrIconEgg from './BrIconEgg.vue'

export default {
  install(app: App) {
    app.component(BrIconEggOutline.name, BrIconEggOutline)
    app.component(BrIconEggSharp.name, BrIconEggSharp)
    app.component(BrIconEgg.name, BrIconEgg)
  },
} as Plugin

export { BrIconEggOutline, BrIconEggSharp, BrIconEgg }
