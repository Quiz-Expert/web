export default {
  NOTIFICATIONS(state, data) {
    state.status = 'success';
    state.notifications = data;
  },

  NEW_NOTIFICATION(state, status) {
    state.notificationStatus = status;
  },

  DISCARD_NOTIFICATIONS(state) {
    state.status = "success";
    state.notifications = null
  },
}