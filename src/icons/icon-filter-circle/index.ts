import { App, Plugin } from 'vue'
import BrIconFilterCircleOutline from './BrIconFilterCircleOutline.vue'
import BrIconFilterCircleSharp from './BrIconFilterCircleSharp.vue'
import BrIconFilterCircle from './BrIconFilterCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconFilterCircleOutline.name, BrIconFilterCircleOutline)
    app.component(BrIconFilterCircleSharp.name, BrIconFilterCircleSharp)
    app.component(BrIconFilterCircle.name, BrIconFilterCircle)
  },
} as Plugin

export {
  BrIconFilterCircleOutline,
  BrIconFilterCircleSharp,
  BrIconFilterCircle,
}
