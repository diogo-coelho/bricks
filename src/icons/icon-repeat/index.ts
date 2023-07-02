import { App, Plugin } from 'vue'
import BrIconRepeatOutline from './BrIconRepeatOutline.vue'
import BrIconRepeatSharp from './BrIconRepeatSharp.vue'
import BrIconRepeat from './BrIconRepeat.vue'

export default {
  install(app: App) {
    app.component(BrIconRepeatOutline.name, BrIconRepeatOutline)
    app.component(BrIconRepeatSharp.name, BrIconRepeatSharp)
    app.component(BrIconRepeat.name, BrIconRepeat)
  },
} as Plugin

export { BrIconRepeatOutline, BrIconRepeatSharp, BrIconRepeat }
