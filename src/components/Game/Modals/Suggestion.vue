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
        <div
          class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle w-full max-w-xl"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
              >
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
                    v-text="$t('pages.game.mode-selection.suggestions.tittle')"
                />
              </div>
            </div>
          </div>
          <form method="POST" @submit.prevent="sendSuggestion()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label for="name"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.question-name')"
                    />
                    <input id="name"
                           v-model="suggestionData.text"
                           type="text"
                           name="name"
                           autocomplete="given-text"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                  </div>
                  <div class="col-span-6 sm:col-span-2">
                    <label for="good-answer"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.good-answer')"
                    />
                    <select id="good-answer"
                            v-model="suggestionData.good_answer"
                            name="good-answer"
                            autocomplete="good-answer"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                    >
                      <option value="a"
                              v-text="$t('pages.game.mode-selection.suggestions.answer-a')"
                      />
                      <option value="b"
                              v-text="$t('pages.game.mode-selection.suggestions.answer-b')"
                      />
                      <option value="c"
                              v-text="$t('pages.game.mode-selection.suggestions.answer-c')"
                      />
                      <option value="d"
                              v-text="$t('pages.game.mode-selection.suggestions.answer-d')"
                      />
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-a"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.answer-a')"
                    />
                    <input id="answer-a"
                           v-model="suggestionData.answer_a"
                           type="text"
                           name="answer-a"
                           autocomplete="given-answer-a"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-b"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.answer-b')"
                    />
                    <input id="answer-b"
                           v-model="suggestionData.answer_b"
                           type="text"
                           name="answer-b"
                           autocomplete="given-answer-b"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-c"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.answer-c')"
                    />
                    <input id="answer-c"
                           v-model="suggestionData.answer_c"
                           type="text"
                           name="answer-c"
                           autocomplete="given-answer-c"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="answer-d"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.game.mode-selection.suggestions.answer-d')"
                    />
                    <input id="answer-d"
                           v-model="suggestionData.answer_d"
                           type="text"
                           name="answer-d"
                           autocomplete="given-answer-d"
                           class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           required
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      v-text="$t('pages.game.final-result.report-mistake.send')"
              />
              <button type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="close()"
                      v-text="$t('pages.game.final-result.report-mistake.cancel')"
              />
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: "Suggestion",

  data() {
    return {
      suggestionData: {
        text: '',
        answer_a: '',
        answer_b: '',
        answer_c: '',
        answer_d: '',
        good_answer: '',
        category_id: '',
      }
    }
  },

  computed: {
    ...mapGetters(['currentCategory']),
  },

  methods: {
    close() {
      this.$emit('close');
    },

    sendSuggestion() {
      this.$emit('close');
      this.suggestionData.category_id = this.currentCategory.id;
      this.$store.dispatch("CREATE_SUGGESTION", this.suggestionData)
        .catch(err => {
          console.log(err);
        });
    }
  },
}
</script>