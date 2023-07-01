import { App, Plugin } from 'vue'
import BrIconFlaskOutline from './BrIconFlaskOutline.vue'
import BrIconFlaskSharp from './BrIconFlaskSharp.vue'
import BrIconFlask from './BrIconFlask.vue'

export default {
  install(app: App) {
    app.component(BrIconFlaskOutline.name, BrIconFlaskOutline)
    app.component(BrIconFlaskSharp.name, BrIconFlaskSharp)
    app.component(BrIconFlask.name, BrIconFlask)
  },
} as Plugin

export { BrIconFlaskOutline, BrIconFlaskSharp, BrIconFlask }
