import {createWebHistory} from 'vue-router'
import translations from '../lang'
import {createLangRouter} from 'vue-lang-router'
import routes from './routes';
import store from "../store";

const langRouterOptions = {
  defaultLanguage: 'pl',
  translations,
}
const routerOptions = {
  history: createWebHistory(process.env.BASE_URL),
  routes
}
const router = createLangRouter(langRouterOptions, routerOptions)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      return next();
    } else {
      next('/auth/login');
    }
  } else {
    return next();
  }
});

export default router
