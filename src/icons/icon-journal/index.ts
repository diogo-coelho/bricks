import { App, Plugin } from 'vue'
import BrIconJournalOutline from './BrIconJournalOutline.vue'
import BrIconJournalSharp from './BrIconJournalSharp.vue'
import BrIconJournal from './BrIconJournal.vue'

export default {
  install(app: App) {
    app.component(BrIconJournalOutline.name, BrIconJournalOutline)
    app.component(BrIconJournalSharp.name, BrIconJournalSharp)
    app.component(BrIconJournal.name, BrIconJournal)
  },
} as Plugin

export { BrIconJournalOutline, BrIconJournalSharp, BrIconJournal }
