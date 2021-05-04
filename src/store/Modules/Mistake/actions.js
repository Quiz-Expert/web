import axios from "../../../axios";

export default {
  GET_MISTAKES({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`mistakes?page=${page}`)
        .then(response => {
          const mistakes = response.data;
          localStorage.setItem('MISTAKES', JSON.stringify(mistakes));
          commit('MISTAKES', mistakes);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  CREATE_MISTAKE({commit}, mistake) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post('mistakes', mistake)
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