import { App, Plugin } from 'vue'
import BrIconBasketballOutline from './BrIconBasketballOutline.vue'
import BrIconBasketballSharp from './BrIconBasketballSharp.vue'
import BrIconBasketball from './BrIconBasketball.vue'

export default {
  install(app: App) {
    app.component(BrIconBasketballOutline.name, BrIconBasketballOutline)
    app.component(BrIconBasketballSharp.name, BrIconBasketballSharp)
    app.component(BrIconBasketball.name, BrIconBasketball)
  },
} as Plugin

export { BrIconBasketballOutline, BrIconBasketballSharp, BrIconBasketball }
