<template>
  <main class="flex justify-center py-12 flex-1 overflow-x-hidden overflow-y-auto">
    <div class="max-w-5xl w-full space-y-6">
      <div>
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.dashboard.questions-panel.tittle')"
        />
      </div>
      <div class="py-2 align-middle inline-block px-4 sm:px-6 lg:px-8 w-full">
        <div class="shadow-xl overflow-hidden border-b border-gray-200 rounded-lg">
          <table class="w-full divide-y-2 divide-green-600">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    v-text="$t('pages.dashboard.questions-panel.category')"
                />
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
              <tr v-for="question in questions" :key="question" class="hover:bg-gray-100">
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900" v-text="question.name" />
                  </div>
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900" v-text="question.description" />
                  </div>
                </td>
                <td class="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-green-600 rounded-full shadow ripple hover:shadow-lg hover:bg-green-700 focus:outline-none"
                          @click="isEditModalVisible=true"
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
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                          @click="isDeleteModalVisible=true"
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
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
    <EditQuestion v-show="isEditModalVisible"
                  @close="isEditModalVisible=false"
    />
    <DeleteModal v-show="isDeleteModalVisible"
                 :tittle="$t('pages.dashboard.questions-panel.removal.tittle')"
                 :question="$t('pages.dashboard.questions-panel.removal.question')"
                 @close="isDeleteModalVisible=false"
    />
  </main>
</template>

<script>
import Pagination from "../Pagination";
import EditQuestion from "../Modals/EditQuestion"
import DeleteModal from "../Modals/DeleteModal"

export default {
  name: "Questions",

  components: {
    Pagination,
    EditQuestion,
    DeleteModal
  },

  data() {
    return {
      isEditModalVisible: false,
      isDeleteModalVisible: false,

      questions: [
        {
          name: "Kategoria - 1",
          description: "Opis Pytania 1"
        },
        {
          name: "Kategoria - 1",
          description: "Opis Pytania 2"
        },
        {
          name: "Kategoria - 1",
          description: "Opis Pytania 3"
        },
        {
          name: "Kategoria - 2",
          description: "Opis Pytania 4"
        },
      ]
    }
  }
}
</script>
