import { App, Plugin } from 'vue'
import BrIconAddCircle from './BrIconAddCircle.vue'
import BrIconAddCircleOutline from './BrIconAddCircleOutline.vue'
import BrIconAddCircleSharp from './BrIconAddCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAddCircle.name, BrIconAddCircle)
    app.component(BrIconAddCircleOutline.name, BrIconAddCircleOutline)
    app.component(BrIconAddCircleSharp.name, BrIconAddCircleSharp)
  },
} as Plugin

export { BrIconAddCircle, BrIconAddCircleOutline, BrIconAddCircleSharp }
