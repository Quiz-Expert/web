<template>
  <main class="flex justify-center py-12 flex-1 overflow-x-hidden overflow-y-auto">
    <div class="max-w-4xl w-full space-y-6">
      <div>
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.dashboard.suggestions-panel.tittle')"
        />
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.suggestions-panel.status')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.suggestions-panel.name')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.suggestions-panel.actions')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="suggestion in suggestions.data" :key="suggestion" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6">
                  <div class="flex justify-center">
                    <div v-if="checkStatus(suggestion,'accepted')"
                         class="p-1 sm:p-2 text-center text-white transition bg-green-600 rounded-full shadow ripple focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"
                           class="w-4 sm:w-5 h-4 sm:h-5"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                      >
                        <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div v-if="checkStatus(suggestion,'rejected')"
                         class="p-1 sm:p-2 text-center text-white transition bg-red-600 rounded-full shadow ripple focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"
                           class="w-4 sm:w-5 h-4 sm:h-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                      >
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div v-if="checkStatus(suggestion,'pending')"
                         class="p-1 sm:p-2 text-center text-white transition bg-gray-400 rounded-full shadow ripple focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"
                           class="w-4 sm:w-5 h-4 sm:h-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                      >
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td class="px-2 sm:px-4 py-4">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900" v-text="suggestion.text" />
                  </div>
                </td>
                <td>
                  <div class="flex px-2 sm:px-6 text-right">
                    <button type="button"
                            class="p-1 sm:p-2 text-center text-white transition bg-yellow-600 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-700 focus:outline-none"
                            @click="showUpdateModal(suggestion)"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"
                           class="w-4 sm:w-5 h-4 sm:h-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                      >
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination @previous-page="previousPage()"
                      @next-page="nextPage()"
          />
        </div>
      </div>
    </div>
    <EditSuggestion v-if="currentSuggestion && this.isEditModalVisible"
                    :suggestion-id="currentSuggestion.id"
                    @close="this.isEditModalVisible = false"
                    @edit="loadPage()"
    />
  </main>
</template>
<script>
import {mapGetters} from "vuex"
import Pagination from "../Pagination"
import EditSuggestion from "../Modals/EditSuggestion"

export default {
  name: "Suggestions",

  components: {
    EditSuggestion,
    Pagination,
  },

  computed: {
    ...mapGetters(["suggestions"]),
  },

  methods: {
    loadPage() {
      this.$store.dispatch("GET_SUGGESTIONS", this.currentPage);
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPage();
      }
    },

    nextPage() {
      if (this.currentPage < this.suggestions.pagination.total_pages) {
        this.currentPage++;
        this.loadPage();
      }
    },

    showUpdateModal(currentSuggestion) {
      this.currentSuggestion = currentSuggestion;
      this.isEditModalVisible = true;
    },

    checkStatus(suggestion, status) {
      return suggestion.status == status;
    }
  },

  data() {
    return {
      isEditModalVisible: false,
      currentPage: 1,
      currentSuggestion: null,
    }
  },

  mounted() {
    this.loadPage();
  },
}
</script>