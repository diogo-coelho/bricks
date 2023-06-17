import { App, Plugin } from 'vue'
import BrIconCheckCircleOutline from './BrIconCheckCircleOutline.vue'

export default {
  install(app: App) {
    app.component(BrIconCheckCircleOutline.name, BrIconCheckCircleOutline)
  },
} as Plugin

export { BrIconCheckCircleOutline }
