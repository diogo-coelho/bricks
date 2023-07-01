import { App, Plugin } from 'vue'
import BrIconCodeSlashOutline from './BrIconCodeSlashOutline.vue'
import BrIconCodeSlashSharp from './BrIconCodeSlashSharp.vue'
import BrIconCodeSlash from './BrIconCodeSlash.vue'

export default {
  install(app: App) {
    app.component(BrIconCodeSlashOutline.name, BrIconCodeSlashOutline)
    app.component(BrIconCodeSlashSharp.name, BrIconCodeSlashSharp)
    app.component(BrIconCodeSlash.name, BrIconCodeSlash)
  },
} as Plugin

export { BrIconCodeSlashOutline, BrIconCodeSlashSharp, BrIconCodeSlash }
