import { App, Plugin } from 'vue'
import BrIconPersonOutline from './BrIconPersonOutline.vue'
import BrIconPersonSharp from './BrIconPersonSharp.vue'
import BrIconPerson from './BrIconPerson.vue'

export default {
  install(app: App) {
    app.component(BrIconPersonOutline.name, BrIconPersonOutline)
    app.component(BrIconPersonSharp.name, BrIconPersonSharp)
    app.component(BrIconPerson.name, BrIconPerson)
  },
} as Plugin

export { BrIconPersonOutline, BrIconPersonSharp, BrIconPerson }
