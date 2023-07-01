import { App, Plugin } from 'vue'
import BrIconMusicalNotesOutline from './BrIconMusicalNotesOutline.vue'
import BrIconMusicalNotesSharp from './BrIconMusicalNotesSharp.vue'
import BrIconMusicalNotes from './BrIconMusicalNotes.vue'

export default {
  install(app: App) {
    app.component(BrIconMusicalNotesOutline.name, BrIconMusicalNotesOutline)
    app.component(BrIconMusicalNotesSharp.name, BrIconMusicalNotesSharp)
    app.component(BrIconMusicalNotes.name, BrIconMusicalNotes)
  },
} as Plugin

export {
  BrIconMusicalNotesOutline,
  BrIconMusicalNotesSharp,
  BrIconMusicalNotes,
}
