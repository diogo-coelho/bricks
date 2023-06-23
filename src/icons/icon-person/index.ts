import { App, Plugin } from 'vue'
import BrIconPerson from './BrIconPerson.vue'

export default {
  install(app: App) {
    app.component(BrIconPerson.name, BrIconPerson)
  },
} as Plugin

export { BrIconPerson }