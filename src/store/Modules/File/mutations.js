export default {
  ICON(state, data) {
    state.status = 'success';
    state.icon = data;
  },
  DISCARD_ICON(state) {
    state.status = 'success';
    state.icon = null;
  },
}