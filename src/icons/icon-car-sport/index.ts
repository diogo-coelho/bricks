import { App, Plugin } from 'vue'
import BrIconCarSportOutline from './BrIconCarSportOutline.vue'
import BrIconCarSportSharp from './BrIconCarSportSharp.vue'
import BrIconCarSport from './BrIconCarSport.vue'

export default {
  install(app: App) {
    app.component(BrIconCarSportOutline.name, BrIconCarSportOutline)
    app.component(BrIconCarSportSharp.name, BrIconCarSportSharp)
    app.component(BrIconCarSport.name, BrIconCarSport)
  },
} as Plugin

export { BrIconCarSportOutline, BrIconCarSportSharp, BrIconCarSport }
