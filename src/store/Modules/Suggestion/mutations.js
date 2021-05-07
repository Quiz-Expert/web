export default {
  SUGGESTIONS(state, data) {
    state.status = 'success';
    state.suggestions = data;
  },
  SUGGESTION_BY_ID(state, data) {
    state.status = 'success';
    state.suggestionById = data;
  },
  DISCARD_SUGGESTION_BY_ID(state) {
    state.status = "success";
    state.suggestionById = null
  }
}