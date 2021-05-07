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

  GET_MISTAKE_BY_ID({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`mistakes/${id}`)
        .then(response => {
          const mistake = response.data.data;
          localStorage.setItem('MISTAKE_BY_ID', JSON.stringify(mistake));
          commit('MISTAKE_BY_ID', mistake);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  CLOSE_MISTAKE({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`mistakes/${id}/close`)
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
  },

  DISCARD_MISTAKE_BY_ID({commit}) {
    commit('DISCARD_MISTAKE_BY_ID');
    localStorage.removeItem('MISTAKE_BY_ID');
  },
}