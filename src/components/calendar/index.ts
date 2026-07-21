import { App, Plugin } from 'vue'
import BrCalendar from './BrCalendar.vue'

export default {
  install(app: App) {
    app.component(BrCalendar.name, BrCalendar)
  },
} as Plugin

export { BrCalendar }