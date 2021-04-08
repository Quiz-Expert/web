import {createWebHistory} from 'vue-router'
import translations from '../lang'
import {createLangRouter} from 'vue-lang-router'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import("../views/Home/Homepage"),
  },
  {
    path: '/auth/login',
    name: 'LoginPage',
    component: () => import("../views/Auth/LoginPage")
  },
  {
    path: '/auth/register',
    name: 'RegisterPage',
    component: () => import("../views/Auth/RegisterPage")
  },
  {
    path: '/user/home',
    name: 'User',
    component: () => import("../views/UserInterface/Homepage")
  }
]

const langRouterOptions = {
  defaultLanguage: 'pl',
  translations,
}
const routerOptions = {
  history: createWebHistory(process.env.BASE_URL),
  routes
}
const router = createLangRouter(langRouterOptions, routerOptions)

export default router
