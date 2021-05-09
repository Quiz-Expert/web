export default {
  AUTH_LOGIN(state, token) {
    state.status = 'login';
    state.token = token;
  },

  AUTH_SUCCESS(state, user) {
    state.status = 'success';
    state.user = user;
  },

  AUTH_LOGOUT(state) {
    state.status = '';
    state.token = '';
  },
}