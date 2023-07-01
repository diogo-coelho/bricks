import { App, Plugin } from 'vue'
import BrIconConstructOutline from './BrIconConstructOutline.vue'
import BrIconConstructSharp from './BrIconConstructSharp.vue'
import BrIconConstruct from './BrIconConstruct.vue'

export default {
  install(app: App) {
    app.component(BrIconConstructOutline.name, BrIconConstructOutline)
    app.component(BrIconConstructSharp.name, BrIconConstructSharp)
    app.component(BrIconConstruct.name, BrIconConstruct)
  },
} as Plugin

export { BrIconConstructOutline, BrIconConstructSharp, BrIconConstruct }
