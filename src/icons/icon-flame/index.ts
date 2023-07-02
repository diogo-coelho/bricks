import { App, Plugin } from 'vue'
import BrIconFlameOutline from './BrIconFlameOutline.vue'
import BrIconFlameSharp from './BrIconFlameSharp.vue'
import BrIconFlame from './BrIconFlame.vue'

export default {
  install(app: App) {
    app.component(BrIconFlameOutline.name, BrIconFlameOutline)
    app.component(BrIconFlameSharp.name, BrIconFlameSharp)
    app.component(BrIconFlame.name, BrIconFlame)
  },
} as Plugin

export { BrIconFlameOutline, BrIconFlameSharp, BrIconFlame }
