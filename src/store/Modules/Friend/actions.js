import axios from "../../../axios";

export default {
  GET_FRIENDS({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`friends?page=${page}`)
        .then(response => {
          const friends = response.data;
          localStorage.setItem('FRIENDS', JSON.stringify(friends));
          commit('FRIENDS', friends);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    });
  },

  DISCARD_FRIENDS({commit}) {
    commit('DISCARD_FRIENDS');
    localStorage.removeItem('FRIENDS');
  },

  UNFRIEND_USER({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`friends/${id}/unfriend`)
        .then(response => {
          commit('SUCCESS');
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    });
  },

  SEARCH_USER({commit}, search) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`users?search=${search}`)
        .then(response => {
          const users = response.data.data;
          localStorage.setItem('SEARCH_USER', JSON.stringify(users));
          commit('SEARCH_USER', users);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    });
  },

  DISCARD_SEARCH_USER({commit}) {
    commit('DISCARD_SEARCH_USER');
    localStorage.removeItem('SEARCH_USER');
  },

  INVITE_FRIEND({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post('friend-requests', {user_id: id})
        .then(response => {
          commit('SUCCESS');
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    });
  },

  INCOMING_FRIENDS({commit}) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get('friend-requests/incoming')
        .then(response => {
          const incomingFriends = response.data;
          localStorage.setItem('INCOMING_FRIENDS', JSON.stringify(incomingFriends));
          commit('INCOMING_FRIENDS', incomingFriends);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  DISCARD_INCOMING_FRIENDS({commit}) {
    commit('DISCARD_INCOMING_FRIENDS');
    localStorage.removeItem('INCOMING_FRIENDS');
  },

  ACCEPT_INVITATION_TO_FRIEND({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`friend-requests/${id}/accept`)
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

  REJECT_INVITATION_TO_FRIEND({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`friend-requests/${id}/reject`)
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
}