import { App, Plugin } from 'vue'
import BrIconFitnessOutline from './BrIconFitnessOutline.vue'
import BrIconFitnessSharp from './BrIconFitnessSharp.vue'
import BrIconFitness from './BrIconFitness.vue'

export default {
  install(app: App) {
    app.component(BrIconFitnessOutline.name, BrIconFitnessOutline)
    app.component(BrIconFitnessSharp.name, BrIconFitnessSharp)
    app.component(BrIconFitness.name, BrIconFitness)
  },
} as Plugin

export { BrIconFitnessOutline, BrIconFitnessSharp, BrIconFitness }
