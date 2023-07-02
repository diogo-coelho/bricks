import { App, Plugin } from 'vue'
import BrIconCalendarClearOutline from './BrIconCalendarClearOutline.vue'
import BrIconCalendarClearSharp from './BrIconCalendarClearSharp.vue'
import BrIconCalendarClear from './BrIconCalendarClear.vue'

export default {
  install(app: App) {
    app.component(BrIconCalendarClearOutline.name, BrIconCalendarClearOutline)
    app.component(BrIconCalendarClearSharp.name, BrIconCalendarClearSharp)
    app.component(BrIconCalendarClear.name, BrIconCalendarClear)
  },
} as Plugin

export {
  BrIconCalendarClearOutline,
  BrIconCalendarClearSharp,
  BrIconCalendarClear,
}
