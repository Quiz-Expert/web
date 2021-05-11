import actions from "./actions";
import mutations from "./mutations";

const file = {
  state: {
    icon: JSON.parse(localStorage.getItem('UPLOADED_ICON')) || '',
  },
  getters: {
    icon: state => state.icon,
  },
  mutations: mutations,
  actions: actions,
}

export default file;