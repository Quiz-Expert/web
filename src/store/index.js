import {createStore} from 'vuex'
import mutations from "./mutations";
import auth from './Modules/Auth'
import category from "./Modules/Category";
import mistake from "./Modules/Mistake";
import suggestion from "./Modules/Suggestion";
import question from "./Modules/Question";
import file from "./Modules/File";

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
  }
})

export default store;
