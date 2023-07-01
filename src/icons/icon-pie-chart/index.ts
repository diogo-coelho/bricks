import { App, Plugin } from 'vue'
import BrIconPieChartOutline from './BrIconPieChartOutline.vue'
import BrIconPieChartSharp from './BrIconPieChartSharp.vue'
import BrIconPieChart from './BrIconPieChart.vue'

export default {
  install(app: App) {
    app.component(BrIconPieChartOutline.name, BrIconPieChartOutline)
    app.component(BrIconPieChartSharp.name, BrIconPieChartSharp)
    app.component(BrIconPieChart.name, BrIconPieChart)
  },
} as Plugin

export { BrIconPieChartOutline, BrIconPieChartSharp, BrIconPieChart }
