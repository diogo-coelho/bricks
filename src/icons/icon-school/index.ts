import { App, Plugin } from 'vue'
import BrIconSchoolOutline from './BrIconSchoolOutline.vue'
import BrIconSchoolSharp from './BrIconSchoolSharp.vue'
import BrIconSchool from './BrIconSchool.vue'

export default {
  install(app: App) {
    app.component(BrIconSchoolOutline.name, BrIconSchoolOutline)
    app.component(BrIconSchoolSharp.name, BrIconSchoolSharp)
    app.component(BrIconSchool.name, BrIconSchool)
  },
} as Plugin

export { BrIconSchoolOutline, BrIconSchoolSharp, BrIconSchool }
