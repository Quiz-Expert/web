import {createStore} from 'vuex'
import actions from "./actions";
import mutations from "./mutations";

const store = createStore({
  state: {
    success: '',
    token: localStorage.getItem('ACCESS_TOKEN') || '',
    user: JSON.parse(localStorage.getItem('CURRENT_USER')) || '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    isAdmin: state => state.user.is_admin,
    user: state => state.user,
  },
  mutations: mutations,
  actions: actions,
  modules: {}
})

export default store;
