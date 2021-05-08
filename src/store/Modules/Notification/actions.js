import {useToast} from "vue-toastification";
import axios from "../../../axios";

const toast = useToast();

export default {
  GET_NOTIFICATION({commit}, page) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.get(`notifications?page=${page}`)
        .then(response => {
          const notifications = response.data;
          localStorage.setItem('NOTIFICATIONS', JSON.stringify(notifications));
          commit('NOTIFICATIONS', notifications);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  READ_NOTIFICATION({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post(`notifications/${id}/mark-read`)
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

  READ_All_NOTIFICATIONS({commit}) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post('notifications/mark-all-as-read')
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

  DISCARD_ALL_NOTIFICATIONS({commit}) {
    commit('DISCARD_NOTIFICATIONS');
    localStorage.removeItem('NOTIFICATIONS');
  },

  GAME_INVITATION({commit}, message) {
    commit('NEW_NOTIFICATION', 'info');
    toast.info(message);
  },

  FRIEND_LIST_INVITATION({commit}, message) {
    commit('NEW_NOTIFICATION', 'info');
    toast.info(message);
  },

  LOGIN_NOTIFICATION({commit}, message) {
    commit('NEW_NOTIFICATION', 'info');
    toast.success(message);
  },

  REGISTER_NOTIFICATION({commit}, message) {
    commit('NEW_NOTIFICATION', 'success');
    toast.success(message);
  }
}