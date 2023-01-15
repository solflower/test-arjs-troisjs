import { createApp } from 'troisjs'
import Page1 from './Page1.vue'
import TestCube from './TestCube.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(TestCube).use(bootstrap).mount('#app')
