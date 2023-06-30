import { App, Plugin } from 'vue'
import BrIconAnalytics from './BrIconAnalytics.vue'
import BrIconAnalyticsOutline from './BrIconAnalyticsOutline.vue'
import BrIconAnalyticsSharp from './BrIconAnalyticsSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAnalytics.name, BrIconAnalytics)
    app.component(BrIconAnalyticsOutline.name, BrIconAnalyticsOutline)
    app.component(BrIconAnalyticsSharp.name, BrIconAnalyticsSharp)
  },
} as Plugin

export { BrIconAnalytics, BrIconAnalyticsOutline, BrIconAnalyticsSharp }
