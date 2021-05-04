export default {
  CATEGORIES(state, data) {
    state.status = 'success';
    state.categories = data;
  },
  SELECT_CATEGORIES(state, date) {
    state.status = "success";
    state.currentCategory = date;
  },
  DISCARD_CATEGORIES(state) {
    state.status = "success";
    state.currentCategory = null
  }
}