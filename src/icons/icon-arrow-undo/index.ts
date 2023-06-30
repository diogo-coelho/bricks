import { App, Plugin } from 'vue'
import BrIconArrowUndo from './BrIconArrowUndo.vue'
import BrIconArrowUndoOutline from './BrIconArrowUndoOutline.vue'
import BrIconArrowUndoSharp from './BrIconArrowUndoSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowUndo.name, BrIconArrowUndo)
    app.component(BrIconArrowUndoOutline.name, BrIconArrowUndoOutline)
    app.component(BrIconArrowUndoSharp.name, BrIconArrowUndoSharp)
  },
} as Plugin

export { BrIconArrowUndo, BrIconArrowUndoOutline, BrIconArrowUndoSharp }
