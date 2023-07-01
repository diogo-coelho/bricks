import { App, Plugin } from 'vue'
import BrIconReaderOutline from './BrIconReaderOutline.vue'
import BrIconReaderSharp from './BrIconReaderSharp.vue'
import BrIconReader from './BrIconReader.vue'

export default {
  install(app: App) {
    app.component(BrIconReaderOutline.name, BrIconReaderOutline)
    app.component(BrIconReaderSharp.name, BrIconReaderSharp)
    app.component(BrIconReader.name, BrIconReader)
  },
} as Plugin

export { BrIconReaderOutline, BrIconReaderSharp, BrIconReader }
