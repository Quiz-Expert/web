import axios from "../../../axios";

export default {
  GET_CATEGORIES({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`categories?page=${page}`)
        .then(response => {
          const categories = response.data;
          localStorage.setItem('CATEGORIES', JSON.stringify(categories));
          commit('CATEGORIES', categories);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  SELECT_CATEGORIES({commit}, category) {
    commit('SELECT_CATEGORIES', category);
    localStorage.setItem('CURRENT_CATEGORIES', JSON.stringify(category));
  },

  DISCARD_CATEGORIES({commit}) {
    commit('DISCARD_CATEGORIES');
    localStorage.removeItem('CURRENT_CATEGORIES');
  },
}