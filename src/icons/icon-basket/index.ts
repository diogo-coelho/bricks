import { App, Plugin } from 'vue'
import BrIconBasketOutline from './BrIconBasketOutline.vue'
import BrIconBasketSharp from './BrIconBasketSharp.vue'
import BrIconBasket from './BrIconBasket.vue'

export default {
  install(app: App) {
    app.component(BrIconBasketOutline.name, BrIconBasketOutline)
    app.component(BrIconBasketSharp.name, BrIconBasketSharp)
    app.component(BrIconBasket.name, BrIconBasket)
  },
} as Plugin

export { BrIconBasketOutline, BrIconBasketSharp, BrIconBasket }
