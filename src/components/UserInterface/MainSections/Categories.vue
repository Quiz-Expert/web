<template>
  <main class="flex justify-center py-12">
    <div class="max-w-6xl w-full space-y-8 px-4">
      <div>
        <h2 class="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.user.select-categories.tittle')"
        />
      </div>
      <div class="grid grid-cols-8 gap-6">
        <div v-for="category in categories.data" :key="category"
             class="col-span-4 md:col-span-2 bg-white border-2 border-gray-300 p-2 sm:p-3 rounded-md shadow-lg hover:border-yellow-500 cursor-pointer"
             @click="selectingCategory(category)"
        >
          <div class="flex items-center justify-center mb-3">
            <img alt="icon" class="h-20 w-20 border-2 border-gray-300" :src="category.icon">
          </div>
          <div class="text-center text-gray-600 text-sm md:text-base" v-text="category.name" />
        </div>
      </div>
      <div class="flex justify-between">
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                @click="previousPage()"
        >
          <svg class="h-5 w-5"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               aria-hidden="true"
          >
            <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
            />
          </svg>
        </button>
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                @click="nextPage()"
        >
          <svg class="h-5 w-5"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               aria-hidden="true"
          >
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Categories",

  data() {
    return {
      currentPage: 1,
    }
  },

  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$store.dispatch("GET_CATEGORIES", --this.currentPage);
      }
    },

    nextPage() {
      if (this.currentPage < this.categories.pagination.total_pages) {
        this.$store.dispatch("GET_CATEGORIES", ++this.currentPage);
      }
    },

    selectingCategory(category) {
      this.$store.dispatch("SELECT_CATEGORIES", category)
        .then(() => this.$router.push({name: 'GameModeSelection'}))
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.$store.dispatch("GET_CATEGORIES", this.currentPage);
  },

  computed: {
    ...mapGetters(['categories']),
  }
}
</script>