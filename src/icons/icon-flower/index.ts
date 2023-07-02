import { App, Plugin } from 'vue'
import BrIconFlowerOutline from './BrIconFlowerOutline.vue'
import BrIconFlowerSharp from './BrIconFlowerSharp.vue'
import BrIconFlower from './BrIconFlower.vue'

export default {
  install(app: App) {
    app.component(BrIconFlowerOutline.name, BrIconFlowerOutline)
    app.component(BrIconFlowerSharp.name, BrIconFlowerSharp)
    app.component(BrIconFlower.name, BrIconFlower)
  },
} as Plugin

export { BrIconFlowerOutline, BrIconFlowerSharp, BrIconFlower }
