import { App, Plugin } from 'vue'
import BrIconEaselOutline from './BrIconEaselOutline.vue'
import BrIconEaselSharp from './BrIconEaselSharp.vue'
import BrIconEasel from './BrIconEasel.vue'

export default {
  install(app: App) {
    app.component(BrIconEaselOutline.name, BrIconEaselOutline)
    app.component(BrIconEaselSharp.name, BrIconEaselSharp)
    app.component(BrIconEasel.name, BrIconEasel)
  },
} as Plugin

export { BrIconEaselOutline, BrIconEaselSharp, BrIconEasel }
