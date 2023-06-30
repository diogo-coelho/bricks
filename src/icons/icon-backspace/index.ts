import { App, Plugin } from 'vue'
import BrIconBackspace from './BrIconBackspace.vue'
import BrIconBackspaceOutline from './BrIconBackspaceOutline.vue'
import BrIconBackspaceSharp from './BrIconBackspaceSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBackspace.name, BrIconBackspace)
    app.component(BrIconBackspaceOutline.name, BrIconBackspaceOutline)
    app.component(BrIconBackspaceSharp.name, BrIconBackspaceSharp)
  },
} as Plugin

export { BrIconBackspace, BrIconBackspaceOutline, BrIconBackspaceSharp }
