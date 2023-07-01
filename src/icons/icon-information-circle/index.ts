import { App, Plugin } from 'vue'
import BrIconInformationCircleOutline from './BrIconInformationCircleOutline.vue'
import BrIconInformationCircleSharp from './BrIconInformationCircleSharp.vue'
import BrIconInformationCircle from './BrIconInformationCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconInformationCircleOutline.name,
      BrIconInformationCircleOutline
    )
    app.component(
      BrIconInformationCircleSharp.name,
      BrIconInformationCircleSharp
    )
    app.component(BrIconInformationCircle.name, BrIconInformationCircle)
  },
} as Plugin

export {
  BrIconInformationCircleOutline,
  BrIconInformationCircleSharp,
  BrIconInformationCircle,
}
