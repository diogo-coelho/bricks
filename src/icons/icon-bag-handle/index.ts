import { App, Plugin } from 'vue'
import BrIconBagHandle from './BrIconBagHandle.vue'
import BrIconBagHandleOutline from './BrIconBagHandleOutline.vue'
import BrIconBagHandleSharp from './BrIconBagHandleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBagHandle.name, BrIconBagHandle)
    app.component(BrIconBagHandleOutline.name, BrIconBagHandleOutline)
    app.component(BrIconBagHandleSharp.name, BrIconBagHandleSharp)
  },
} as Plugin

export { BrIconBagHandle, BrIconBagHandleOutline, BrIconBagHandleSharp }
