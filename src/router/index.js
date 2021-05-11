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
    if (!store.getters.isLoggedIn) {
      next({name: 'Login'});
    }
  }

  if (to.matched.some(record => record.meta.onlyAdmin)) {
    if (!store.getters.isAdmin) {
      next({name: 'Not-found'})
    }
  }

  if (to.matched.some(record => record.meta.isAuthenticated)) {
    if (store.getters.isLoggedIn) {
      next({name: 'User'})
    }
  }

  next();
});

export default router
