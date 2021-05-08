import {createStore} from 'vuex'
import mutations from "./mutations";
import auth from './Modules/Auth'
import category from "./Modules/Category";
import mistake from "./Modules/Mistake";
import suggestion from "./Modules/Suggestion";
import question from "./Modules/Question";
import file from "./Modules/File";
import notification from "./Modules/Notification";

const store = createStore({
  state: {
    status: null,
  },
  getters: {
    status: state => state.status,
  },
  mutations: mutations,
  modules: {
    auth: auth,
    category: category,
    mistake: mistake,
    suggestion: suggestion,
    question: question,
    file: file,
    notification: notification
  }
})

export default store;
