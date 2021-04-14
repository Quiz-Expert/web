import {createWebHistory} from 'vue-router'
import translations from '../lang'
import {createLangRouter} from 'vue-lang-router'
import routes from './routes';

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
