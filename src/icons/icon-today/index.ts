import { App, Plugin } from 'vue'
import BrIconTodayOutline from './BrIconTodayOutline.vue'
import BrIconTodaySharp from './BrIconTodaySharp.vue'
import BrIconToday from './BrIconToday.vue'

export default {
  install(app: App) {
    app.component(BrIconTodayOutline.name, BrIconTodayOutline)
    app.component(BrIconTodaySharp.name, BrIconTodaySharp)
    app.component(BrIconToday.name, BrIconToday)
  },
} as Plugin

export { BrIconTodayOutline, BrIconTodaySharp, BrIconToday }
