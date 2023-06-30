import { App, Plugin } from 'vue'
import BrIconArrowDown from './BrIconArrowDown.vue'
import BrIconArrowDownOutline from './BrIconArrowDownOutline.vue'
import BrIconArrowDownSharp from './BrIconArrowDownSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowDown.name, BrIconArrowDown)
    app.component(BrIconArrowDownOutline.name, BrIconArrowDownOutline)
    app.component(BrIconArrowDownSharp.name, BrIconArrowDownSharp)
  },
} as Plugin

export { BrIconArrowDown, BrIconArrowDownOutline, BrIconArrowDownSharp }
