export default {
  QUESTIONS(state, data) {
    state.status = 'success';
    state.questions = data;
  },

  QUESTION_BY_ID(state, data) {
    state.status = 'success';
    state.questionById = data;
  },

  DISCARD_QUESTIONS(state) {
    state.status = "success";
    state.questions = []
  },

  DISCARD_QUESTION_BY_ID(state) {
    state.status = "success";
    state.questionById = {}
  }
}