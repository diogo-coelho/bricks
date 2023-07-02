import { App, Plugin } from 'vue'
import BrIconCartOutline from './BrIconCartOutline.vue'
import BrIconCartSharp from './BrIconCartSharp.vue'
import BrIconCart from './BrIconCart.vue'

export default {
  install(app: App) {
    app.component(BrIconCartOutline.name, BrIconCartOutline)
    app.component(BrIconCartSharp.name, BrIconCartSharp)
    app.component(BrIconCart.name, BrIconCart)
  },
} as Plugin

export { BrIconCartOutline, BrIconCartSharp, BrIconCart }
