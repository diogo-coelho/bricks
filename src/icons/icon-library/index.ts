import { App, Plugin } from 'vue'
import BrIconLibraryOutline from './BrIconLibraryOutline.vue'
import BrIconLibrarySharp from './BrIconLibrarySharp.vue'
import BrIconLibrary from './BrIconLibrary.vue'

export default {
  install(app: App) {
    app.component(BrIconLibraryOutline.name, BrIconLibraryOutline)
    app.component(BrIconLibrarySharp.name, BrIconLibrarySharp)
    app.component(BrIconLibrary.name, BrIconLibrary)
  },
} as Plugin

export { BrIconLibraryOutline, BrIconLibrarySharp, BrIconLibrary }
