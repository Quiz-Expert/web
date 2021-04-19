import axios from "../axios";

export default {
  LOGIN({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')

      axios.post('login', user)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('ACCESS_TOKEN', token);

          commit('AUTH_LOGIN', token);
        })
        .catch((err) => {
          localStorage.removeItem('ACCESS_TOKEN');

          commit('AUTH_ERROR');
          reject(err);
        });

      axios.get('user')
        .then(response => {
          const user = response.data;
          localStorage.setItem('CURRENT_USER', JSON.stringify(user));

          commit('AUTH_SUCCESS', user);
          resolve(response);
        })
        .catch((err) => {
          commit('AUTH_ERROR');
          reject(err);
        });
    })
  },

  REGISTER({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')

      axios.post('register', user)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('ACCESS_TOKEN', token);

          commit('AUTH_LOGIN', token);
        })
        .catch(err => {
          commit('AUTH_ERROR');
          localStorage.removeItem('ACCESS_TOKEN');

          reject(err);
        });

      axios.get('user')
        .then(response => {
          const user = response.data;
          localStorage.setItem('CURRENT_USER', JSON.stringify(user));

          commit('AUTH_SUCCESS', user);
          resolve(response);
        })
        .catch((err) => {
          commit('AUTH_ERROR');
          reject(err);
        });
    });
  },

  LOGOUT({commit}) {
    return new Promise((resolve) => {
      commit('AUTH_LOGOUT');
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('CURRENT_USER');
      resolve();
    });
  }
}