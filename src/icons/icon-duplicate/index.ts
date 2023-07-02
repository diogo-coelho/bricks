import { App, Plugin } from 'vue'
import BrIconDuplicateOutline from './BrIconDuplicateOutline.vue'
import BrIconDuplicateSharp from './BrIconDuplicateSharp.vue'
import BrIconDuplicate from './BrIconDuplicate.vue'

export default {
  install(app: App) {
    app.component(BrIconDuplicateOutline.name, BrIconDuplicateOutline)
    app.component(BrIconDuplicateSharp.name, BrIconDuplicateSharp)
    app.component(BrIconDuplicate.name, BrIconDuplicate)
  },
} as Plugin

export { BrIconDuplicateOutline, BrIconDuplicateSharp, BrIconDuplicate }
