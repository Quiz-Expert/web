import actions from "./actions";
import mutations from "./mutations";

const suggestion = {
  state: {
    suggestions: [],
  },
  getters: {
    suggestions: state => state.suggestions,
  },
  mutations: mutations,
  actions: actions,
}

export default suggestion;