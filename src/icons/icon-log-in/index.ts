import { App, Plugin } from 'vue'
import BrIconLogInOutline from './BrIconLogInOutline.vue'
import BrIconLogInSharp from './BrIconLogInSharp.vue'
import BrIconLogIn from './BrIconLogIn.vue'

export default {
  install(app: App) {
    app.component(BrIconLogInOutline.name, BrIconLogInOutline)
    app.component(BrIconLogInSharp.name, BrIconLogInSharp)
    app.component(BrIconLogIn.name, BrIconLogIn)
  },
} as Plugin

export { BrIconLogInOutline, BrIconLogInSharp, BrIconLogIn }
