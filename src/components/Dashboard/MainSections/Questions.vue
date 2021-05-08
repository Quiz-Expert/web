<template>
  <main class="flex justify-center py-12 flex-1 overflow-x-hidden overflow-y-auto">
    <div class="max-w-4xl w-full space-y-6">
      <div class="flex justify-between align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="w-full -mr-10">
          <h2 class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
              v-text="$t('pages.dashboard.questions-panel.tittle')"
          />
        </div>
        <div class="">
          <button type="button"
                  class="p-1 sm:p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                  @click="this.isCreateModalVisible=true"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6"
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
          </button>
        </div>
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.questions-panel.name')"
                />
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.questions-panel.actions')"
                />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="question in questions.data" :key="question" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6 py-4">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900" v-text="question.text" />
                  </div>
                </td>
                <td>
                  <div class="flex-row md:flex px-2 sm:px-6 text-right space-x-2 space-y-2 md:space-y-0">
                    <button type="button"
                            class="p-1 sm:p-2 text-center text-white transition bg-green-600 rounded-full shadow ripple hover:shadow-lg hover:bg-green-700 focus:outline-none"
                            @click="showUpdateModal(question)"
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
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button type="button"
                            class="p-1 sm:p-2 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                            @click="showRemoveModal(question)"
                    >
                      <svg class="w-4 sm:w-5 h-4 sm:h-5 text-white"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                      >
                        <path fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
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
    <CreateQuestion v-if="this.isCreateModalVisible"
                    @close="this.isCreateModalVisible = false"
                    @create="loadPage()"
    />
    <EditQuestion v-if="currentQuestion && this.isEditModalVisible"
                  :question-id="currentQuestion.id"
                  @close="this.isEditModalVisible = false"
                  @edit="loadPage()"
    />
    <DeleteModal v-if="currentQuestion && this.isDeleteModalVisible"
                 :tittle="$t('pages.dashboard.questions-panel.removal.tittle')"
                 :question="$t('pages.dashboard.questions-panel.removal.question')"
                 @close="isDeleteModalVisible = false"
                 @remove="removeQuestion()"
    />
  </main>
</template>
<script>
import {mapGetters} from "vuex"
import Pagination from "../../Pagination"
import CreateQuestion from "../Modals/CreateQuestion";
import EditQuestion from "../Modals/EditQuestion"
import DeleteModal from "../Modals/DeleteModal"

export default {
  name: "Questions",

  components: {
    Pagination,
    CreateQuestion,
    EditQuestion,
    DeleteModal
  },

  computed: {
    ...mapGetters(["questions"]),
  },

  methods: {
    loadPage() {
      this.$store.dispatch("GET_QUESTIONS", this.currentPage);
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadPage();
      }
    },

    nextPage() {
      if (this.currentPage < this.questions.pagination.total_pages) {
        this.currentPage++;
        this.loadPage();
      }
    },

    removeQuestion() {
      this.$store.dispatch("REMOVE_QUESTION", this.currentQuestion.id)
        .then(() => {
          this.loadPage();
        });
    },

    showRemoveModal(currentQuestion) {
      this.currentQuestion = currentQuestion;
      this.isDeleteModalVisible = true;
    },

    showUpdateModal(currentQuestion) {
      this.currentQuestion = currentQuestion;
      this.isEditModalVisible = true;
    }
  },

  data() {
    return {
      isCreateModalVisible: false,
      isEditModalVisible: false,
      isDeleteModalVisible: false,
      currentPage: 1,
      currentQuestion: null,
    }
  },

  mounted() {
    this.loadPage();
  },
}
</script>
