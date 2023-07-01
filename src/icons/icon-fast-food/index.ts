import { App, Plugin } from 'vue'
import BrIconFastFoodOutline from './BrIconFastFoodOutline.vue'
import BrIconFastFoodSharp from './BrIconFastFoodSharp.vue'
import BrIconFastFood from './BrIconFastFood.vue'

export default {
  install(app: App) {
    app.component(BrIconFastFoodOutline.name, BrIconFastFoodOutline)
    app.component(BrIconFastFoodSharp.name, BrIconFastFoodSharp)
    app.component(BrIconFastFood.name, BrIconFastFood)
  },
} as Plugin

export { BrIconFastFoodOutline, BrIconFastFoodSharp, BrIconFastFood }
