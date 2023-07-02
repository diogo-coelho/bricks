import { App, Plugin } from 'vue'
import BrIconNuclearOutline from './BrIconNuclearOutline.vue'
import BrIconNuclearSharp from './BrIconNuclearSharp.vue'
import BrIconNuclear from './BrIconNuclear.vue'

export default {
  install(app: App) {
    app.component(BrIconNuclearOutline.name, BrIconNuclearOutline)
    app.component(BrIconNuclearSharp.name, BrIconNuclearSharp)
    app.component(BrIconNuclear.name, BrIconNuclear)
  },
} as Plugin

export { BrIconNuclearOutline, BrIconNuclearSharp, BrIconNuclear }
