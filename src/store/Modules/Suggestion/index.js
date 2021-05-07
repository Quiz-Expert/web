import actions from "./actions";
import mutations from "./mutations";

const suggestion = {
  state: {
    suggestions: JSON.parse(localStorage.getItem('SUGGESTIONS')) || [],
    suggestionById: JSON.parse(localStorage.getItem('SUGGESTION_BY_ID')) || {},
  },
  getters: {
    suggestions: state => state.suggestions,
    suggestionById: state => state.suggestionById
  },
  mutations: mutations,
  actions: actions,
}

export default suggestion;