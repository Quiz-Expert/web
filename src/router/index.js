import { createWebHistory } from 'vue-router'
import translations from '../lang'
import { createLangRouter } from 'vue-lang-router'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import("../views/Homepage"),
  },
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
