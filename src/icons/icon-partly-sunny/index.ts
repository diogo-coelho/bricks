import { App, Plugin } from 'vue'
import BrIconPartlySunnyOutline from './BrIconPartlySunnyOutline.vue'
import BrIconPartlySunnySharp from './BrIconPartlySunnySharp.vue'
import BrIconPartlySunny from './BrIconPartlySunny.vue'

export default {
  install(app: App) {
    app.component(BrIconPartlySunnyOutline.name, BrIconPartlySunnyOutline)
    app.component(BrIconPartlySunnySharp.name, BrIconPartlySunnySharp)
    app.component(BrIconPartlySunny.name, BrIconPartlySunny)
  },
} as Plugin

export { BrIconPartlySunnyOutline, BrIconPartlySunnySharp, BrIconPartlySunny }
