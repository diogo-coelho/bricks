import { App, Plugin } from 'vue'
import BrIconInsertEmoticon from './BrIconInsertEmoticon.vue'

export default {
  install(app: App) {
    app.component(BrIconInsertEmoticon.name, BrIconInsertEmoticon)
  },
} as Plugin

export { BrIconInsertEmoticon }
