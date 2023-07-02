import { App, Plugin } from 'vue'
import BrIconMusicalNoteOutline from './BrIconMusicalNoteOutline.vue'
import BrIconMusicalNoteSharp from './BrIconMusicalNoteSharp.vue'
import BrIconMusicalNote from './BrIconMusicalNote.vue'

export default {
  install(app: App) {
    app.component(BrIconMusicalNoteOutline.name, BrIconMusicalNoteOutline)
    app.component(BrIconMusicalNoteSharp.name, BrIconMusicalNoteSharp)
    app.component(BrIconMusicalNote.name, BrIconMusicalNote)
  },
} as Plugin

export { BrIconMusicalNoteOutline, BrIconMusicalNoteSharp, BrIconMusicalNote }
