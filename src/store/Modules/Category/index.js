import actions from "./actions";
import mutations from "./mutations";

const category = {
  state: {
    categories: JSON.parse(localStorage.getItem('CATEGORIES')) || [],
    allCategories: JSON.parse(localStorage.getItem('ALL_CATEGORIES')) || [],
    currentCategory: JSON.parse(localStorage.getItem('CURRENT_CATEGORIES')) || {},
    categoryById: JSON.parse(localStorage.getItem('CATEGORY_BY_ID')) || {},
  },
  getters: {
    categories: state => state.categories,
    allCategories: state => state.allCategories,
    currentCategory: state => state.currentCategory,
    categoryById: state => state.categoryById
  },
  mutations: mutations,
  actions: actions,
}

export default category;