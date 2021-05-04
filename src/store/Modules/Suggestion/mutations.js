export default {
  SUGGESTIONS(state, data) {
    state.status = 'success';
    state.suggestions = data;
  },
}