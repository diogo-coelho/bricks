import { App, Plugin } from 'vue'
import BrIconArrowRedo from './BrIconArrowRedo.vue'
import BrIconArrowRedoOutline from './BrIconArrowRedoOutline.vue'
import BrIconArrowRedoSharp from './BrIconArrowRedoSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowRedo.name, BrIconArrowRedo)
    app.component(BrIconArrowRedoOutline.name, BrIconArrowRedoOutline)
    app.component(BrIconArrowRedoSharp.name, BrIconArrowRedoSharp)
  },
} as Plugin

export { BrIconArrowRedo, BrIconArrowRedoOutline, BrIconArrowRedoSharp }
