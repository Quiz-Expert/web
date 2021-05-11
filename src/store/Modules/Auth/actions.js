import axios from "../../../axios";

export default {
  AUTH({commit}, [user, action]) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`auth/${action}`, user)
        .then(response => {
          const token = response.data.data;
          localStorage.setItem('ACCESS_TOKEN', token);
          commit('AUTH_LOGIN', token);
          resolve(response);
        })
        .catch((err) => {
          localStorage.removeItem('ACCESS_TOKEN');
          commit('ERROR');
          reject(err);
        });
    })
  },

  GET_USER({commit}) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get('auth/user')
        .then(response => {
          const user = response.data.data;
          localStorage.setItem('CURRENT_USER', JSON.stringify(user));
          commit('AUTH_SUCCESS', user);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  async LOGIN({dispatch}, user) {
    await dispatch('AUTH', [user, "login"]);
    await dispatch('GET_USER');
  },

  async REGISTER({dispatch}, user) {
    await dispatch('AUTH', [user, 'register']);
    await dispatch('GET_USER');
  },

  LOGOUT({commit}) {
    return new Promise((resolve) => {
      return axios.post('auth/logout')
        .then(() => {
          commit('AUTH_LOGOUT');
          localStorage.removeItem('ACCESS_TOKEN');
          localStorage.removeItem('CURRENT_USER');
          resolve();
        })
    });
  }
}