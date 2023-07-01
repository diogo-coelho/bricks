import { App, Plugin } from 'vue'
import BrIconTicketOutline from './BrIconTicketOutline.vue'
import BrIconTicketSharp from './BrIconTicketSharp.vue'
import BrIconTicket from './BrIconTicket.vue'

export default {
  install(app: App) {
    app.component(BrIconTicketOutline.name, BrIconTicketOutline)
    app.component(BrIconTicketSharp.name, BrIconTicketSharp)
    app.component(BrIconTicket.name, BrIconTicket)
  },
} as Plugin

export { BrIconTicketOutline, BrIconTicketSharp, BrIconTicket }
