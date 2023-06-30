import { App, Plugin } from 'vue'
import BrIconAtCircle from './BrIconAtCircle.vue'
import BrIconAtCircleOutline from './BrIconAtCircleOutline.vue'
import BrIconAtCircleSharp from './BrIconAtCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAtCircle.name, BrIconAtCircle)
    app.component(BrIconAtCircleOutline.name, BrIconAtCircleOutline)
    app.component(BrIconAtCircleSharp.name, BrIconAtCircleSharp)
  },
} as Plugin

export { BrIconAtCircle, BrIconAtCircleOutline, BrIconAtCircleSharp }
