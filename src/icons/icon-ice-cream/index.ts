import { App, Plugin } from 'vue'
import BrIconIceCreamOutline from './BrIconIceCreamOutline.vue'
import BrIconIceCreamSharp from './BrIconIceCreamSharp.vue'
import BrIconIceCream from './BrIconIceCream.vue'

export default {
  install(app: App) {
    app.component(BrIconIceCreamOutline.name, BrIconIceCreamOutline)
    app.component(BrIconIceCreamSharp.name, BrIconIceCreamSharp)
    app.component(BrIconIceCream.name, BrIconIceCream)
  },
} as Plugin

export { BrIconIceCreamOutline, BrIconIceCreamSharp, BrIconIceCream }
