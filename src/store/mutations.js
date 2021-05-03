export default {
  REQUEST(state) {
    state.status = 'loading';
  },

  ERROR(state) {
    state.status = 'error';
  },
}