export default {
  MISTAKES(state, data) {
    state.status = 'success';
    state.mistakes = data;
  },
  MISTAKE_BY_ID(state, data) {
    state.status = 'success';
    state.mistakeById = data;
  },
  DISCARD_MISTAKE_BY_ID(state) {
    state.status = "success";
    state.mistakeById = null
  }
}