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
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6 text-yellow-600"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                >
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div class="pt-2 text-center sm:ml-4 sm:text-left">
                <h3 id="modal-title"
                    class="text-lg leading-6 font-medium text-gray-900"
                    v-text="$t('pages.dashboard.questions-panel.creating.tittle')"
                />
              </div>
            </div>
          </div>
          <form method="POST" @submit.prevent="createQuestion()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6">
                    <label for="text"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.creating.name')"
                    />
                    <input id="text"
                           v-model="questionData.text"
                           type="text"
                           name="text"
                           autocomplete="given-text"
                           :class="checkInput('text') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                    <span v-show="checkInput('text')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('text')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <label for="category"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.creating.category')"
                    />
                    <select id="category"
                            v-model="questionData.category_id"
                            name="category"
                            autocomplete="category"
                            :class="checkInput('category_id') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
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
                           v-text="$t('pages.dashboard.questions-panel.creating.good-answer')"
                    />
                    <select id="good-answer"
                            v-model="questionData.good_answer"
                            name="good-answer"
                            autocomplete="good-answer"
                            :class="checkInput('good_answer') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                    >
                      <option value="a"
                              v-text="$t('pages.dashboard.questions-panel.creating.answer-a')"
                      />
                      <option value="b"
                              v-text="$t('pages.dashboard.questions-panel.creating.answer-b')"
                      />
                      <option value="c"
                              v-text="$t('pages.dashboard.questions-panel.creating.answer-c')"
                      />
                      <option value="d"
                              v-text="$t('pages.dashboard.questions-panel.creating.answer-d')"
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
                           v-text="$t('pages.dashboard.questions-panel.creating.answer-a')"
                    />
                    <input id="answer-a"
                           v-model="questionData.answer_a"
                           type="text"
                           name="answer-a"
                           autocomplete="given-answer-a"
                           :class="checkInput('answer_a') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                    <span v-show="checkInput('answer_a')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_a')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-b"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.creating.answer-b')"
                    />
                    <input id="answer-b"
                           v-model="questionData.answer_b"
                           type="text"
                           name="answer-b"
                           autocomplete="given-answer-b"
                           :class="checkInput('answer_b') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                    <span v-show="checkInput('answer_b')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_b')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-c"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.creating.answer-c')"
                    />
                    <input id="answer-c"
                           v-model="questionData.answer_c"
                           type="text"
                           name="answer-c"
                           autocomplete="given-answer-c"
                           :class="checkInput('answer_c') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                    <span v-show="checkInput('answer_c')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('answer_c')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-d"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.questions-panel.creating.answer-d')"
                    />
                    <input id="answer-d"
                           v-model="questionData.answer_d"
                           type="text"
                           name="answer-d"
                           autocomplete="given-answer-d"
                           :class="checkInput('answer_d') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
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
                      v-text="$t('pages.dashboard.questions-panel.creating.save')"
              />
              <button type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="close()"
                      v-text="$t('pages.dashboard.questions-panel.creating.cancel')"
              />
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateQuestion",

  data() {
    return {
      error: {
        message: '',
        data: {},
      },

      questionData: {},
    }
  },

  methods: {
    close() {
      this.$emit('close');
    },

    checkInput(name) {
      return name in this.error.data;
    },

    getErrorMessage(name) {
      return (this.error.data[name] + "").toString();
    },

    createQuestion() {
      console.log(this.questionData)
      this.$store.dispatch("CREATE_QUESTION", this.questionData)
        .then(() => {
          this.close();
          this.$emit('create');
          this.$store.dispatch("SUCCESS_NOTIFICATION", this.$t('pages.dashboard.questions-panel.creating.message'));
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