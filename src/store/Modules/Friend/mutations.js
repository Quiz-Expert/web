export default {
  FRIENDS(state, data) {
    state.status = 'success';
    state.friends = data;
  },
  DISCARD_FRIENDS(state) {
    state.status = "success";
    state.friends = [];
  },
  SEARCH_USER(state, data) {
    state.status = 'success';
    state.searchUser = data;
  },
  DISCARD_SEARCH_USER(state) {
    state.status = "success";
    state.searchUser = [];
  },
  INCOMING_FRIENDS(state, data) {
    state.status = 'success';
    state.incomingFriends = data;
  },
  DISCARD_INCOMING_FRIENDS(state) {
    state.status = "success";
    state.incomingFriends = [];
  },
}