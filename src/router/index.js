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
    path: '/user',
    name: 'User',
    redirect: "/user/categories",
    component: () => import("../views/UserInterface/UserPage"),

    children: [
      {
        path: "categories",
        component: () => import("../components/UserInterface/MainSections/Categories"),
      },
    ]
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
