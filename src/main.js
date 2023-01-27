import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.use(TroisJSVuePlugin)
app.mount('#app')
//createApp(App).use(router,bootstrap).mount('#app')