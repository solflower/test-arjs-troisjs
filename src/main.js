import { createApp } from 'troisjs'
import App from './App.vue'
import testar from './views/testar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import router from '@/router'

createApp(App).use(router,bootstrap).mount('#app')