import { App, Plugin } from 'vue'
import BrIconHappyOutline from './BrIconHappyOutline.vue'
import BrIconHappySharp from './BrIconHappySharp.vue'
import BrIconHappy from './BrIconHappy.vue'

export default {
  install(app: App) {
    app.component(BrIconHappyOutline.name, BrIconHappyOutline)
    app.component(BrIconHappySharp.name, BrIconHappySharp)
    app.component(BrIconHappy.name, BrIconHappy)
  },
} as Plugin

export { BrIconHappyOutline, BrIconHappySharp, BrIconHappy }
