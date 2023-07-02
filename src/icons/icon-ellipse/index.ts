import { App, Plugin } from 'vue'
import BrIconEllipseOutline from './BrIconEllipseOutline.vue'
import BrIconEllipseSharp from './BrIconEllipseSharp.vue'
import BrIconEllipse from './BrIconEllipse.vue'

export default {
  install(app: App) {
    app.component(BrIconEllipseOutline.name, BrIconEllipseOutline)
    app.component(BrIconEllipseSharp.name, BrIconEllipseSharp)
    app.component(BrIconEllipse.name, BrIconEllipse)
  },
} as Plugin

export { BrIconEllipseOutline, BrIconEllipseSharp, BrIconEllipse }
