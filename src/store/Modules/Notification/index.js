import actions from "./actions";
import mutations from "./mutations";

const notification = {
  state: {
    notifications: JSON.parse(localStorage.getItem('NOTIFICATIONS')) || null,
    notificationStatus: 'none'
  },
  getters: {
    notifications: state => state.notifications,
    notificationStatus: state => state.notificationStatus,
  },
  mutations: mutations,
  actions: actions,
}

export default notification;