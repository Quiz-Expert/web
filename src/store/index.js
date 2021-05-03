import {createStore} from 'vuex'
import mutations from "./mutations";
import auth from './Modules/Auth'
import categories from "./Modules/Categories";

const store = createStore({
  state: {
    status: null,
  },
  getters: {
    status: state => state.status,
  },
  mutations: mutations,
  modules: {
    auth: auth,
    categories: categories
  }
})

export default store;
