import { App, Plugin } from 'vue'
import BrIconBarChartOutline from './BrIconBarChartOutline.vue'
import BrIconBarChartSharp from './BrIconBarChartSharp.vue'
import BrIconBarChart from './BrIconBarChart.vue'

export default {
  install(app: App) {
    app.component(BrIconBarChartOutline.name, BrIconBarChartOutline)
    app.component(BrIconBarChartSharp.name, BrIconBarChartSharp)
    app.component(BrIconBarChart.name, BrIconBarChart)
  },
} as Plugin

export { BrIconBarChartOutline, BrIconBarChartSharp, BrIconBarChart }
