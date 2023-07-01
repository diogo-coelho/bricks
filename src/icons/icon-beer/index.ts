import { App, Plugin } from 'vue'
import BrIconBeerOutline from './BrIconBeerOutline.vue'
import BrIconBeerSharp from './BrIconBeerSharp.vue'
import BrIconBeer from './BrIconBeer.vue'

export default {
  install(app: App) {
    app.component(BrIconBeerOutline.name, BrIconBeerOutline)
    app.component(BrIconBeerSharp.name, BrIconBeerSharp)
    app.component(BrIconBeer.name, BrIconBeer)
  },
} as Plugin

export { BrIconBeerOutline, BrIconBeerSharp, BrIconBeer }
