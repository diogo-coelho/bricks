import { App, Plugin } from 'vue'
import BrIconPizzaOutline from './BrIconPizzaOutline.vue'
import BrIconPizzaSharp from './BrIconPizzaSharp.vue'
import BrIconPizza from './BrIconPizza.vue'

export default {
  install(app: App) {
    app.component(BrIconPizzaOutline.name, BrIconPizzaOutline)
    app.component(BrIconPizzaSharp.name, BrIconPizzaSharp)
    app.component(BrIconPizza.name, BrIconPizza)
  },
} as Plugin

export { BrIconPizzaOutline, BrIconPizzaSharp, BrIconPizza }
