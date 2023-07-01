import { App, Plugin } from 'vue'
import BrIconCodeWorkingOutline from './BrIconCodeWorkingOutline.vue'
import BrIconCodeWorkingSharp from './BrIconCodeWorkingSharp.vue'
import BrIconCodeWorking from './BrIconCodeWorking.vue'

export default {
  install(app: App) {
    app.component(BrIconCodeWorkingOutline.name, BrIconCodeWorkingOutline)
    app.component(BrIconCodeWorkingSharp.name, BrIconCodeWorkingSharp)
    app.component(BrIconCodeWorking.name, BrIconCodeWorking)
  },
} as Plugin

export { BrIconCodeWorkingOutline, BrIconCodeWorkingSharp, BrIconCodeWorking }
