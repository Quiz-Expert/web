export default {
  AUTH_REQUEST(state) {
    state.status = 'loading';
  },

  AUTH_LOGIN(state, token) {
    state.status = 'login';
    state.token = token;
  },

  AUTH_SUCCESS(state, user) {
    state.status = 'success';
    state.user = user;
  },

  AUTH_ERROR(state) {
    state.status = 'error';
  },

  AUTH_LOGOUT(state) {
    state.status = '';
    state.token = '';
  },
}