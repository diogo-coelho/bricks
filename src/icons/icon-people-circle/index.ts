import { App, Plugin } from 'vue'
import BrIconPeopleCircleOutline from './BrIconPeopleCircleOutline.vue'
import BrIconPeopleCircleSharp from './BrIconPeopleCircleSharp.vue'
import BrIconPeopleCircle from './BrIconPeopleCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconPeopleCircleOutline.name, BrIconPeopleCircleOutline)
    app.component(BrIconPeopleCircleSharp.name, BrIconPeopleCircleSharp)
    app.component(BrIconPeopleCircle.name, BrIconPeopleCircle)
  },
} as Plugin

export {
  BrIconPeopleCircleOutline,
  BrIconPeopleCircleSharp,
  BrIconPeopleCircle,
}
