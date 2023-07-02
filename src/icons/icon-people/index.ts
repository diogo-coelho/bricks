import { App, Plugin } from 'vue'
import BrIconPeopleOutline from './BrIconPeopleOutline.vue'
import BrIconPeopleSharp from './BrIconPeopleSharp.vue'
import BrIconPeople from './BrIconPeople.vue'

export default {
  install(app: App) {
    app.component(BrIconPeopleOutline.name, BrIconPeopleOutline)
    app.component(BrIconPeopleSharp.name, BrIconPeopleSharp)
    app.component(BrIconPeople.name, BrIconPeople)
  },
} as Plugin

export { BrIconPeopleOutline, BrIconPeopleSharp, BrIconPeople }
