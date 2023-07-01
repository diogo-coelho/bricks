import { App, Plugin } from 'vue'
import BrIconTrainOutline from './BrIconTrainOutline.vue'
import BrIconTrainSharp from './BrIconTrainSharp.vue'
import BrIconTrain from './BrIconTrain.vue'

export default {
  install(app: App) {
    app.component(BrIconTrainOutline.name, BrIconTrainOutline)
    app.component(BrIconTrainSharp.name, BrIconTrainSharp)
    app.component(BrIconTrain.name, BrIconTrain)
  },
} as Plugin

export { BrIconTrainOutline, BrIconTrainSharp, BrIconTrain }
