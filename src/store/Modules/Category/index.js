import actions from "./actions";
import mutations from "./mutations";

const category = {
  state: {
    categories: [],
    currentCategory: JSON.parse(localStorage.getItem('CURRENT_CATEGORIES')) || null,
  },
  getters: {
    categories: state => state.categories,
    currentCategory: state => state.currentCategory,
  },
  mutations: mutations,
  actions: actions,
}

export default category;