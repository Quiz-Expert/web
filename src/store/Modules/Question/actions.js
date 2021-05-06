import axios from "../../../axios";

export default {
  GET_QUESTIONS({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`questions?page=${page}`)
        .then(response => {
          const questions = response.data;
          localStorage.setItem('QUESTIONS', JSON.stringify(questions));
          commit('QUESTIONS', questions);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  GET_QUESTION_BY_ID({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`questions/${id}`)
        .then(response => {
          const question = response.data.data;
          localStorage.setItem('QUESTION_BY_ID', JSON.stringify(question));
          commit('QUESTION_BY_ID', question);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  UPDATE_QUESTION({commit}, question) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      const id = question.id;
      return axios.put(`questions/${id}`, question)
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

  REMOVE_QUESTION({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.delete(`questions/${id}`)
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

  DISCARD_QUESTION_BY_ID({commit}) {
    commit('DISCARD_QUESTION_BY_ID');
    localStorage.removeItem('QUESTION_BY_ID');
  },
}