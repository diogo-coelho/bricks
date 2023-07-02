import { App, Plugin } from 'vue'
import BrIconToggleOutline from './BrIconToggleOutline.vue'
import BrIconToggleSharp from './BrIconToggleSharp.vue'
import BrIconToggle from './BrIconToggle.vue'

export default {
  install(app: App) {
    app.component(BrIconToggleOutline.name, BrIconToggleOutline)
    app.component(BrIconToggleSharp.name, BrIconToggleSharp)
    app.component(BrIconToggle.name, BrIconToggle)
  },
} as Plugin

export { BrIconToggleOutline, BrIconToggleSharp, BrIconToggle }
