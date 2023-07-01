import { App, Plugin } from 'vue'
import BrIconLogoBitbucket from './BrIconLogoBitbucket.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoBitbucket.name, BrIconLogoBitbucket)
  },
} as Plugin

export { BrIconLogoBitbucket }
