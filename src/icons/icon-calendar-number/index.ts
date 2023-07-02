import { App, Plugin } from 'vue'
import BrIconCalendarNumberOutline from './BrIconCalendarNumberOutline.vue'
import BrIconCalendarNumberSharp from './BrIconCalendarNumberSharp.vue'
import BrIconCalendarNumber from './BrIconCalendarNumber.vue'

export default {
  install(app: App) {
    app.component(BrIconCalendarNumberOutline.name, BrIconCalendarNumberOutline)
    app.component(BrIconCalendarNumberSharp.name, BrIconCalendarNumberSharp)
    app.component(BrIconCalendarNumber.name, BrIconCalendarNumber)
  },
} as Plugin

export {
  BrIconCalendarNumberOutline,
  BrIconCalendarNumberSharp,
  BrIconCalendarNumber,
}
