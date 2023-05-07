# bricks
A UI components library for Vue.js

## Installation and Usage

To download the package, use:

``` bash
npm i @diogo-coelho/bricks

yarn add @diogo-coelho/bricks
```

To include the complete library on your own application, use the following snippet:

``` bash
import { createApp } from 'vue'
import App from './App.vue'
import BricksLibrary from '@diogo-coelho/bricks'

const app = createApp(App)
app.use(BricksLibrary)
app.mount('#app')
```

If you don't want include all the components, it's also possible include them individually 
``` bash
import { BrInput } from '@diogo-coelho/bricks'

const app = createApp(App)
app.use(BrInput)
app.mount('#app')
```