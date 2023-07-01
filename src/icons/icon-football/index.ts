import { App, Plugin } from 'vue'
import BrIconFootballOutline from './BrIconFootballOutline.vue'
import BrIconFootballSharp from './BrIconFootballSharp.vue'
import BrIconFootball from './BrIconFootball.vue'

export default {
  install(app: App) {
    app.component(BrIconFootballOutline.name, BrIconFootballOutline)
    app.component(BrIconFootballSharp.name, BrIconFootballSharp)
    app.component(BrIconFootball.name, BrIconFootball)
  },
} as Plugin

export { BrIconFootballOutline, BrIconFootballSharp, BrIconFootball }
