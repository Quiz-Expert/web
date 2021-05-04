import actions from "./actions";
import mutations from "./mutations";

const mistake = {
  state: {
    mistakes: [],
  },
  getters: {
    mistakes: state => state.mistakes,
  },
  mutations: mutations,
  actions: actions,
}

export default mistake;