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

  GET_CATEGORY_BY_ID({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`categories/${id}`)
        .then(response => {
          const category = response.data.data;
          localStorage.setItem('CATEGORY_BY_ID', JSON.stringify(category));
          commit('CATEGORY_BY_ID', category);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  UPDATE_CATEGORY({commit}, category) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      const id = category.id;
      return axios.put(`categories/${id}`, category)
        .then(response => {
          commit('SUCCESS');
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  REMOVE_CATEGORY({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.delete(`categories/${id}`)
        .then(response => {
          commit('SUCCESS');
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

  DISCARD_CATEGORY_BY_ID({commit}) {
    commit('DISCARD_CATEGORY_BY_ID');
    localStorage.removeItem('CATEGORY_BY_ID');
  },
}