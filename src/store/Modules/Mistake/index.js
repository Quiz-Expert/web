import actions from "./actions";
import mutations from "./mutations";

const mistake = {
  state: {
    mistakes: JSON.parse(localStorage.getItem('MISTAKES')) || [],
    mistakeById: JSON.parse(localStorage.getItem('MISTAKE_BY_ID')) || null,
  },
  getters: {
    mistakes: state => state.mistakes,
    mistakeById: state => state.mistakeById,
    isMistakeExist: state => !!state.mistakeById
  },
  mutations: mutations,
  actions: actions,
}

export default mistake;