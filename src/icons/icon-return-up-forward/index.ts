import { App, Plugin } from 'vue'
import BrIconReturnUpForwardOutline from './BrIconReturnUpForwardOutline.vue'
import BrIconReturnUpForwardSharp from './BrIconReturnUpForwardSharp.vue'
import BrIconReturnUpForward from './BrIconReturnUpForward.vue'

export default {
  install(app: App) {
    app.component(
      BrIconReturnUpForwardOutline.name,
      BrIconReturnUpForwardOutline
    )
    app.component(BrIconReturnUpForwardSharp.name, BrIconReturnUpForwardSharp)
    app.component(BrIconReturnUpForward.name, BrIconReturnUpForward)
  },
} as Plugin

export {
  BrIconReturnUpForwardOutline,
  BrIconReturnUpForwardSharp,
  BrIconReturnUpForward,
}
