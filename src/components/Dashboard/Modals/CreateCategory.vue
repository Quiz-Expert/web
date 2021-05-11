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
        <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle w-full max-w-lg">
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
                    v-text="$t('pages.dashboard.categories-panel.creating.tittle')"
                />
              </div>
            </div>
          </div>
          <form method="POST" @submit.prevent="createCategory()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="name"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.categories-panel.creating.name')"
                    />
                    <input
                      id="name"
                      v-model="categoryData.name"
                      type="text"
                      name="name"
                      autocomplete="given-name"
                      :class="checkInput('name') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                      class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm rounded-md"
                    >
                    <span v-show="checkInput('name')"
                          class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                          v-text="getErrorMessage('name')"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="description"
                           class="block text-sm font-medium text-gray-700"
                           v-text="$t('pages.dashboard.categories-panel.creating.description')"
                    />
                    <div class="mt-1">
                      <textarea id="description"
                                v-model="categoryData.description"
                                name="description"
                                rows="3"
                                :class="checkInput('description') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                                class="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm rounded-md"
                      />
                      <span v-show="checkInput('description')"
                            class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                            v-text="getErrorMessage('description')"
                      />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <p class="text-sm text-gray-700" v-text="$t('pages.dashboard.categories-panel.creating.photo')" />
                    <div class="mt-1 flex items-center">
                      <div class="flex items-center text-sm">
                        <img alt="icon" class="h-10 w-10 border-2 border-gray-300" :src="categoryIcon">
                      </div>
                      <label class="cursor-pointer" for="file">
                        <span
                          :class="checkInput('icon') ? 'ring-red-500 border-red-500' : 'border-gray-300'"
                          class="whitespace-nowrap ml-5 bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          v-text="$t('pages.dashboard.categories-panel.creating.change-photo')"
                        />
                        <input id="file"
                               ref="file"
                               type="file"
                               class="hidden"
                               accept="image/png"
                               @change="handleFileUpload()"
                        >
                      </label>
                      <span v-show="checkInput('icon')"
                            class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
                            v-text="getErrorMessage('icon')"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                      v-text="$t('pages.dashboard.categories-panel.creating.save')"
              />
              <button type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="close()"
                      v-text="$t('pages.dashboard.categories-panel.creating.cancel')"
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
  name: "CreateCategory",

  computed: {
    ...mapGetters(["icon"]),
  },

  data() {
    return {
      error: {
        message: '',
        data: {},
      },

      categoryData: {},
      categoryIcon: ''
    }
  },

  methods: {
    close() {
      this.$emit('close');
      this.$store.dispatch("DISCARD_ICON");
    },

    checkInput(name) {
      return name in this.error.data;
    },

    getErrorMessage(name) {
      return (this.error.data[name] + "").toString();
    },

    handleFileUpload() {
      let file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', file);

      this.$store.dispatch("UPLOAD_ICON", formData)
        .then(() => {
          this.categoryData.icon = this.icon.filename;
          this.categoryIcon = this.icon.url;
        })
        .catch(err => {
          console.log(err);
        });
    },

    createCategory() {
      this.$store.dispatch("CREATE_CATEGORY", this.categoryData)
        .then(() => {
          this.close();
          this.$emit('create');
          this.$store.dispatch("SUCCESS_NOTIFICATION", this.$t('pages.dashboard.categories-panel.creating.message'));
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