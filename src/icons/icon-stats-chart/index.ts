import { App, Plugin } from 'vue'
import BrIconStatsChartOutline from './BrIconStatsChartOutline.vue'
import BrIconStatsChartSharp from './BrIconStatsChartSharp.vue'
import BrIconStatsChart from './BrIconStatsChart.vue'

export default {
  install(app: App) {
    app.component(BrIconStatsChartOutline.name, BrIconStatsChartOutline)
    app.component(BrIconStatsChartSharp.name, BrIconStatsChartSharp)
    app.component(BrIconStatsChart.name, BrIconStatsChart)
  },
} as Plugin

export { BrIconStatsChartOutline, BrIconStatsChartSharp, BrIconStatsChart }
