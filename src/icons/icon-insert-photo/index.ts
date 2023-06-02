import { App, Plugin } from 'vue'
import BrIconInsertPhoto from './BrIconInsertPhoto.vue'

export default {
  install(app: App) {
    app.component(BrIconInsertPhoto.name, BrIconInsertPhoto)
  },
} as Plugin

export { BrIconInsertPhoto }
