import { App, Plugin } from 'vue'
import BrIconFilmOutline from './BrIconFilmOutline.vue'
import BrIconFilmSharp from './BrIconFilmSharp.vue'
import BrIconFilm from './BrIconFilm.vue'

export default {
  install(app: App) {
    app.component(BrIconFilmOutline.name, BrIconFilmOutline)
    app.component(BrIconFilmSharp.name, BrIconFilmSharp)
    app.component(BrIconFilm.name, BrIconFilm)
  },
} as Plugin

export { BrIconFilmOutline, BrIconFilmSharp, BrIconFilm }
