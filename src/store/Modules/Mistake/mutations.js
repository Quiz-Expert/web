export default {
  MISTAKES(state, data) {
    state.status = 'success';
    state.mistakes = data;
  },
}