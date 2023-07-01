import { App, Plugin } from 'vue'
import BrIconVideocamOffOutline from './BrIconVideocamOffOutline.vue'
import BrIconVideocamOffSharp from './BrIconVideocamOffSharp.vue'
import BrIconVideocamOff from './BrIconVideocamOff.vue'

export default {
  install(app: App) {
    app.component(BrIconVideocamOffOutline.name, BrIconVideocamOffOutline)
    app.component(BrIconVideocamOffSharp.name, BrIconVideocamOffSharp)
    app.component(BrIconVideocamOff.name, BrIconVideocamOff)
  },
} as Plugin

export { BrIconVideocamOffOutline, BrIconVideocamOffSharp, BrIconVideocamOff }
