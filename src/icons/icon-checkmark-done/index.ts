import { App, Plugin } from 'vue'
import BrIconCheckmarkDoneOutline from './BrIconCheckmarkDoneOutline.vue'
import BrIconCheckmarkDoneSharp from './BrIconCheckmarkDoneSharp.vue'
import BrIconCheckmarkDone from './BrIconCheckmarkDone.vue'

export default {
  install(app: App) {
    app.component(BrIconCheckmarkDoneOutline.name, BrIconCheckmarkDoneOutline)
    app.component(BrIconCheckmarkDoneSharp.name, BrIconCheckmarkDoneSharp)
    app.component(BrIconCheckmarkDone.name, BrIconCheckmarkDone)
  },
} as Plugin

export {
  BrIconCheckmarkDoneOutline,
  BrIconCheckmarkDoneSharp,
  BrIconCheckmarkDone,
}
