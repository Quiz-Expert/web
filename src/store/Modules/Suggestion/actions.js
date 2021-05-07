import axios from "../../../axios";

export default {
  GET_SUGGESTIONS({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`suggestions?page=${page}`)
        .then(response => {
          const suggestions = response.data;
          localStorage.setItem('SUGGESTIONS', JSON.stringify(suggestions));
          commit('SUGGESTIONS', suggestions);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  GET_SUGGESTION_BY_ID({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`suggestions/${id}`)
        .then(response => {
          const suggestion = response.data.data;
          localStorage.setItem('SUGGESTION_BY_ID', JSON.stringify(suggestion));
          commit('SUGGESTION_BY_ID', suggestion);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  ACCEPT_SUGGESTION({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`suggestions/${id}/accept`)
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

  REJECT_SUGGESTION({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`suggestions/${id}/reject`)
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

  CREATE_SUGGESTION({commit}, suggestion) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post('suggestions', suggestion)
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

  DISCARD_SUGGESTION_BY_ID({commit}) {
    commit('DISCARD_SUGGESTION_BY_ID');
    localStorage.removeItem('SUGGESTION_BY_ID');
  },
}