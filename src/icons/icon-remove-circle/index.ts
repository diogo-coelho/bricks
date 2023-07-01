import { App, Plugin } from 'vue'
import BrIconRemoveCircleOutline from './BrIconRemoveCircleOutline.vue'
import BrIconRemoveCircleSharp from './BrIconRemoveCircleSharp.vue'
import BrIconRemoveCircle from './BrIconRemoveCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconRemoveCircleOutline.name, BrIconRemoveCircleOutline)
    app.component(BrIconRemoveCircleSharp.name, BrIconRemoveCircleSharp)
    app.component(BrIconRemoveCircle.name, BrIconRemoveCircle)
  },
} as Plugin

export {
  BrIconRemoveCircleOutline,
  BrIconRemoveCircleSharp,
  BrIconRemoveCircle,
}
