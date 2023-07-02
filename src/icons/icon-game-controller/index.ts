import { App, Plugin } from 'vue'
import BrIconGameControllerOutline from './BrIconGameControllerOutline.vue'
import BrIconGameControllerSharp from './BrIconGameControllerSharp.vue'
import BrIconGameController from './BrIconGameController.vue'

export default {
  install(app: App) {
    app.component(BrIconGameControllerOutline.name, BrIconGameControllerOutline)
    app.component(BrIconGameControllerSharp.name, BrIconGameControllerSharp)
    app.component(BrIconGameController.name, BrIconGameController)
  },
} as Plugin

export {
  BrIconGameControllerOutline,
  BrIconGameControllerSharp,
  BrIconGameController,
}
