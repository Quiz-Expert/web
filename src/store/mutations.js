export default {
  REQUEST(state) {
    state.status = 'loading';
  },

  SUCCESS(state) {
    state.status = 'success';
  },

  ERROR(state) {
    state.status = 'error';
  },
}