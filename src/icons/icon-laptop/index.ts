import { App, Plugin } from 'vue'
import BrIconLaptopOutline from './BrIconLaptopOutline.vue'
import BrIconLaptopSharp from './BrIconLaptopSharp.vue'
import BrIconLaptop from './BrIconLaptop.vue'

export default {
  install(app: App) {
    app.component(BrIconLaptopOutline.name, BrIconLaptopOutline)
    app.component(BrIconLaptopSharp.name, BrIconLaptopSharp)
    app.component(BrIconLaptop.name, BrIconLaptop)
  },
} as Plugin

export { BrIconLaptopOutline, BrIconLaptopSharp, BrIconLaptop }
