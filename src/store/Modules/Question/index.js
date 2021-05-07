import actions from "./actions";
import mutations from "./mutations";

const question = {
  state: {
    questions: JSON.parse(localStorage.getItem('QUESTIONS')) || [],
    questionById: JSON.parse(localStorage.getItem('QUESTION_BY_ID')) || null,
  },
  getters: {
    questions: state => state.questions,
    questionById: state => state.questionById
  },
  mutations: mutations,
  actions: actions,
}

export default question;