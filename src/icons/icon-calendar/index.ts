import { App, Plugin } from 'vue'
import BrIconCalendarOutline from './BrIconCalendarOutline.vue'
import BrIconCalendarSharp from './BrIconCalendarSharp.vue'
import BrIconCalendar from './BrIconCalendar.vue'

export default {
  install(app: App) {
    app.component(BrIconCalendarOutline.name, BrIconCalendarOutline)
    app.component(BrIconCalendarSharp.name, BrIconCalendarSharp)
    app.component(BrIconCalendar.name, BrIconCalendar)
  },
} as Plugin

export { BrIconCalendarOutline, BrIconCalendarSharp, BrIconCalendar }
