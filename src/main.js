import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/style.css'
import { i18n } from 'vue-lang-router'

createApp(App)
    .use(router)
    .use(i18n)
    .use(store)
    .mount('#app');
