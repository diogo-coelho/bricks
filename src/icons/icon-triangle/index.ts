import { App, Plugin } from 'vue'
import BrIconTriangleOutline from './BrIconTriangleOutline.vue'
import BrIconTriangleSharp from './BrIconTriangleSharp.vue'
import BrIconTriangle from './BrIconTriangle.vue'

export default {
  install(app: App) {
    app.component(BrIconTriangleOutline.name, BrIconTriangleOutline)
    app.component(BrIconTriangleSharp.name, BrIconTriangleSharp)
    app.component(BrIconTriangle.name, BrIconTriangle)
  },
} as Plugin

export { BrIconTriangleOutline, BrIconTriangleSharp, BrIconTriangle }
