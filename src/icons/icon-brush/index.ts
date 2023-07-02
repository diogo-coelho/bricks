import { App, Plugin } from 'vue'
import BrIconBrushOutline from './BrIconBrushOutline.vue'
import BrIconBrushSharp from './BrIconBrushSharp.vue'
import BrIconBrush from './BrIconBrush.vue'

export default {
  install(app: App) {
    app.component(BrIconBrushOutline.name, BrIconBrushOutline)
    app.component(BrIconBrushSharp.name, BrIconBrushSharp)
    app.component(BrIconBrush.name, BrIconBrush)
  },
} as Plugin

export { BrIconBrushOutline, BrIconBrushSharp, BrIconBrush }
