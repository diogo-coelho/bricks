import { App, Plugin } from 'vue'
import BrIconRecordingOutline from './BrIconRecordingOutline.vue'
import BrIconRecordingSharp from './BrIconRecordingSharp.vue'
import BrIconRecording from './BrIconRecording.vue'

export default {
  install(app: App) {
    app.component(BrIconRecordingOutline.name, BrIconRecordingOutline)
    app.component(BrIconRecordingSharp.name, BrIconRecordingSharp)
    app.component(BrIconRecording.name, BrIconRecording)
  },
} as Plugin

export { BrIconRecordingOutline, BrIconRecordingSharp, BrIconRecording }
