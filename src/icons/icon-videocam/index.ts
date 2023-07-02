import { App, Plugin } from 'vue'
import BrIconVideocamOutline from './BrIconVideocamOutline.vue'
import BrIconVideocamSharp from './BrIconVideocamSharp.vue'
import BrIconVideocam from './BrIconVideocam.vue'

export default {
  install(app: App) {
    app.component(BrIconVideocamOutline.name, BrIconVideocamOutline)
    app.component(BrIconVideocamSharp.name, BrIconVideocamSharp)
    app.component(BrIconVideocam.name, BrIconVideocam)
  },
} as Plugin

export { BrIconVideocamOutline, BrIconVideocamSharp, BrIconVideocam }
