import { App, Plugin } from 'vue'
import BrIconRestaurantOutline from './BrIconRestaurantOutline.vue'
import BrIconRestaurantSharp from './BrIconRestaurantSharp.vue'
import BrIconRestaurant from './BrIconRestaurant.vue'

export default {
  install(app: App) {
    app.component(BrIconRestaurantOutline.name, BrIconRestaurantOutline)
    app.component(BrIconRestaurantSharp.name, BrIconRestaurantSharp)
    app.component(BrIconRestaurant.name, BrIconRestaurant)
  },
} as Plugin

export { BrIconRestaurantOutline, BrIconRestaurantSharp, BrIconRestaurant }
