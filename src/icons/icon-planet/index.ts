import { App, Plugin } from 'vue'
import BrIconPlanetOutline from './BrIconPlanetOutline.vue'
import BrIconPlanetSharp from './BrIconPlanetSharp.vue'
import BrIconPlanet from './BrIconPlanet.vue'

export default {
  install(app: App) {
    app.component(BrIconPlanetOutline.name, BrIconPlanetOutline)
    app.component(BrIconPlanetSharp.name, BrIconPlanetSharp)
    app.component(BrIconPlanet.name, BrIconPlanet)
  },
} as Plugin

export { BrIconPlanetOutline, BrIconPlanetSharp, BrIconPlanet }
