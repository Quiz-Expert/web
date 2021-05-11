import mutations from "./mutations";
import actions from "./actions";

const auth = {
  state: {
    token: localStorage.getItem('ACCESS_TOKEN') || '',
    user: JSON.parse(localStorage.getItem('CURRENT_USER')) || {},
  },
  getters: {
    isLoggedIn: state => !!state.token,
    isAdmin: state => state.user.is_admin,
    user: state => state.user,
  },
  mutations: mutations,
  actions: actions,
}

export default auth;