import { App, Plugin } from 'vue'
import BrIconLogoPwa from './BrIconLogoPwa.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoPwa.name, BrIconLogoPwa)
  },
} as Plugin

export { BrIconLogoPwa }
