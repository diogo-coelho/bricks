import { App, Plugin } from 'vue'
import BrIconDirectionsBike from './BrIconDirectionsBike.vue'

export default {
  install(app: App) {
    app.component(BrIconDirectionsBike.name, BrIconDirectionsBike)
  },
} as Plugin

export { BrIconDirectionsBike }
