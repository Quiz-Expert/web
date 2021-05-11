import actions from "./actions";
import mutations from "./mutations";

const friend = {
  state: {
    friends: JSON.parse(localStorage.getItem('FRIENDS')) || [],
    searchUser: JSON.parse(localStorage.getItem('SEARCH_USER')) || [],
    incomingFriends: JSON.parse(localStorage.getItem('INCOMING_FRIENDS')) || [],
  },
  getters: {
    friends: state => state.friends,
    searchUser: state => state.searchUser,
    incomingFriends: state => state.incomingFriends,
  },
  mutations: mutations,
  actions: actions,
}

export default friend;