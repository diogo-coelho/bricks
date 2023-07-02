import { App, Plugin } from 'vue'
import BrIconBaseballOutline from './BrIconBaseballOutline.vue'
import BrIconBaseballSharp from './BrIconBaseballSharp.vue'
import BrIconBaseball from './BrIconBaseball.vue'

export default {
  install(app: App) {
    app.component(BrIconBaseballOutline.name, BrIconBaseballOutline)
    app.component(BrIconBaseballSharp.name, BrIconBaseballSharp)
    app.component(BrIconBaseball.name, BrIconBaseball)
  },
} as Plugin

export { BrIconBaseballOutline, BrIconBaseballSharp, BrIconBaseball }
