export default {
  CATEGORIES(state, data) {
    state.status = 'success';
    state.categories = data;
  },
  CATEGORY_BY_ID(state, data) {
    state.status = 'success';
    state.categoryById = data;
  },
  SELECT_CATEGORIES(state, date) {
    state.status = "success";
    state.currentCategory = date;
  },
  DISCARD_CATEGORIES(state) {
    state.status = "success";
    state.currentCategory = null
  },
  DISCARD_CATEGORY_BY_ID(state) {
    state.status = "success";
    state.categoryById = null
  }
}