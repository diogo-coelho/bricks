import { App, Plugin } from 'vue'
import BrIconCalculatorOutline from './BrIconCalculatorOutline.vue'
import BrIconCalculatorSharp from './BrIconCalculatorSharp.vue'
import BrIconCalculator from './BrIconCalculator.vue'

export default {
  install(app: App) {
    app.component(BrIconCalculatorOutline.name, BrIconCalculatorOutline)
    app.component(BrIconCalculatorSharp.name, BrIconCalculatorSharp)
    app.component(BrIconCalculator.name, BrIconCalculator)
  },
} as Plugin

export { BrIconCalculatorOutline, BrIconCalculatorSharp, BrIconCalculator }
