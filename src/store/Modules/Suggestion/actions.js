import axios from "../../../axios";

export default {
  GET_SUGGESTIONS({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`suggestions?page=${page}`)
        .then(response => {
          const suggestion = response.data;
          localStorage.setItem('SUGGESTIONS', JSON.stringify(suggestion));
          commit('SUGGESTIONS', suggestion);
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
  }
}