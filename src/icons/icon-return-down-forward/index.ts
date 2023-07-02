import { App, Plugin } from 'vue'
import BrIconReturnDownForwardOutline from './BrIconReturnDownForwardOutline.vue'
import BrIconReturnDownForwardSharp from './BrIconReturnDownForwardSharp.vue'
import BrIconReturnDownForward from './BrIconReturnDownForward.vue'

export default {
  install(app: App) {
    app.component(
      BrIconReturnDownForwardOutline.name,
      BrIconReturnDownForwardOutline
    )
    app.component(
      BrIconReturnDownForwardSharp.name,
      BrIconReturnDownForwardSharp
    )
    app.component(BrIconReturnDownForward.name, BrIconReturnDownForward)
  },
} as Plugin

export {
  BrIconReturnDownForwardOutline,
  BrIconReturnDownForwardSharp,
  BrIconReturnDownForward,
}
