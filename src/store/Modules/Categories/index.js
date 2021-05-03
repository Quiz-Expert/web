import actions from "./actions";
import mutations from "./mutations";

const categories = {
  state: {
    categories: [],
  },
  getters: {
    categories: state => state.categories,
  },
  mutations: mutations,
  actions: actions,
}

export default categories;