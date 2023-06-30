import { App, Plugin } from 'vue'
import BrIconArrowForward from './BrIconArrowForward.vue'
import BrIconArrowForwardOutline from './BrIconArrowForwardOutline.vue'
import BrIconArrowForwardSharp from './BrIconArrowForwardSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowForward.name, BrIconArrowForward)
    app.component(BrIconArrowForwardOutline.name, BrIconArrowForwardOutline)
    app.component(BrIconArrowForwardSharp.name, BrIconArrowForwardSharp)
  },
} as Plugin

export {
  BrIconArrowForward,
  BrIconArrowForwardOutline,
  BrIconArrowForwardSharp,
}
