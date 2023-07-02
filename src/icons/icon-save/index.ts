import { App, Plugin } from 'vue'
import BrIconSaveOutline from './BrIconSaveOutline.vue'
import BrIconSaveSharp from './BrIconSaveSharp.vue'
import BrIconSave from './BrIconSave.vue'

export default {
  install(app: App) {
    app.component(BrIconSaveOutline.name, BrIconSaveOutline)
    app.component(BrIconSaveSharp.name, BrIconSaveSharp)
    app.component(BrIconSave.name, BrIconSave)
  },
} as Plugin

export { BrIconSaveOutline, BrIconSaveSharp, BrIconSave }
