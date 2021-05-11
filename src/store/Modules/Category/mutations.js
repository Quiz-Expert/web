export default {
  CATEGORIES(state, data) {
    state.status = 'success';
    state.categories = data;
  },

  ALL_CATEGORIES(state, data) {
    state.status = 'success';
    state.allCategories = data;
  },

  CATEGORY_BY_ID(state, data) {
    state.status = 'success';
    state.categoryById = data;
  },

  SELECT_CATEGORIES(state, date) {
    state.status = "success";
    state.currentCategory = date;
  },

  DISCARD_CATEGORY(state) {
    state.status = "success";
    state.currentCategory = {}
  },

  DISCARD_CATEGORIES(state) {
    state.status = "success";
    state.categories = [];
  },

  DISCARD_ALL_CATEGORIES(state) {
    state.status = "success";
    state.allCategories = [];
  },

  DISCARD_CATEGORY_BY_ID(state) {
    state.status = "success";
    state.categoryById = {}
  },
}