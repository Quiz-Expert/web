<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
      <transition enter-active-class="duration-300 ease-out"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="duration-200 ease-in"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
      </transition>
      <span class="hidden sm:inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <transition enter-active-class="duration-300 ease-out"
                  enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                  leave-active-class="duration-200 ease-in"
                  leave-class="opacity-100 translate-y-0 sm:scale-100"
                  leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle w-full max-w-xl">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 text-green-600"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                >
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div class="pt-2 text-center sm:ml-4 sm:text-left">
                <h3 id="modal-title"
                    class="text-lg leading-6 font-medium text-gray-900"
                    v-text="$t('pages.dashboard.questions-panel.edition.tittle')"
                />
              </div>
            </div>
          </div>
          <form method="POST" @submit.prevent="updateQuestion()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6">
                    <label for="text"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.name')"
                    />
                    <input id="text"
                           v-model="questionData.text"
                           type="text"
                           name="text"
                           autocomplete="given-text"
                           :class="checkInput('text') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <span v-show="checkInput('text')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('text')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <label for="category"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.category')"
                    />
                    <select id="category"
                            v-model="questionData.category_id"
                            name="category"
                            autocomplete="category"
                            :class="checkInput('category_id') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="1">Kategoria - 1</option>
                      <option value="2">Kategoria - 2</option>
                    </select>
                    <span v-show="checkInput('category_id')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('category_id')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="good-answer"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.good-answer')"
                    />
                    <select id="good-answer"
                            v-model="questionData.good_answer"
                            name="good-answer"
                            autocomplete="good-answer"
                            :class="checkInput('good_answer') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="a"
                              v-text="$t('pages.dashboard.questions-panel.edition.answer-a')"
                      />
                      <option value="b"
                              v-text="$t('pages.dashboard.questions-panel.edition.answer-b')"
                      />
                      <option value="c"
                              v-text="$t('pages.dashboard.questions-panel.edition.answer-c')"
                      />
                      <option value="d"
                              v-text="$t('pages.dashboard.questions-panel.edition.answer-d')"
                      />
                    </select>
                    <span v-show="checkInput('good_answer')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('good_answer')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-a"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.answer-a')"
                    />
                    <input id="answer-a"
                           v-model="questionData.answer_a"
                           type="text"
                           name="answer-a"
                           autocomplete="given-answer-a"
                           :class="checkInput('answer_a') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <span v-show="checkInput('answer_a')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_a')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-b"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.answer-b')"
                    />
                    <input id="answer-b"
                           v-model="questionData.answer_b"
                           type="text"
                           name="answer-b"
                           autocomplete="given-answer-b"
                           :class="checkInput('answer_b') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <span v-show="checkInput('answer_b')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_b')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-c"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.answer-c')"
                    />
                    <input id="answer-c"
                           v-model="questionData.answer_c"
                           type="text"
                           name="answer-c"
                           autocomplete="given-answer-c"
                           :class="checkInput('answer_c') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <span v-show="checkInput('answer_c')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_c')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-d"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.edition.answer-d')"
                    />
                    <input id="answer-d"
                           v-model="questionData.answer_d"
                           type="text"
                           name="answer-d"
                           autocomplete="given-answer-d"
                           :class="checkInput('answer_d') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                    <span v-show="checkInput('answer_d')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_d')"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      v-text="$t('pages.dashboard.questions-panel.edition.save')"
              />
              <button type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="close()"
                      v-text="$t('pages.dashboard.questions-panel.edition.cancel')"
              />
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"

export default {
  name: "EditQuestion",

  props: {
    questionId: {
      type: Number
    }
  },

  computed: {
    ...mapGetters(["questionById"]),
  },

  data() {
    return {
      error: {
        message: '',
        data: {},
      },

      questionData: {},
    }
  },

  mounted() {
    this.$store.dispatch("GET_QUESTION_BY_ID", this.questionId)
      .then(() => {
        this.questionData = this.questionById;
      });
  },

  methods: {
    close() {
      this.$emit('close');
      this.$store.dispatch("DISCARD_QUESTION_BY_ID");
    },

    checkInput(name) {
      return name in this.error.data;
    },

    getErrorMessage(name) {
      return (this.error.data[name] + "").toString();
    },

    updateQuestion() {
      this.$store.dispatch("UPDATE_QUESTION", this.questionData)
        .then(() => {
          this.close();
          this.$emit('edit');
        })
        .catch(err => {
          console.log(err);
          const response = err.response.data;
          this.error.message = response.message;
          this.error.data = response.errors;
        });
    }
  },
}
</script>