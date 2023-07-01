import { App, Plugin } from 'vue'
import BrIconLogoPython from './BrIconLogoPython.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoPython.name, BrIconLogoPython)
  },
} as Plugin

export { BrIconLogoPython }
