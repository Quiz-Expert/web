import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Toast from "vue-toastification";
import toastOptions from "./toast";
import './assets/css/style.css'
import "vue-toastification/dist/index.css";
import {i18n} from 'vue-lang-router'

createApp(App)
  .use(router)
  .use(i18n)
  .use(store)
  .use(Toast, toastOptions)
  .mount('#app');
