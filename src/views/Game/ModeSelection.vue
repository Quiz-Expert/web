<template>
  <div class="min-h-screen bg-gray-200 pb-16">
    <div class="flex justify-center bg-green-700">
      <div class="w-full max-w-7xl">
        <button type="button"
                class="flex text-gray-200 dark:text-gray-300 focus:outline-none p-3 xl:px-0"
                @click="discardCategories()"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-8 md:h-10 w-8 md:w-12"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
          >
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg-green-700 w-full text-center -mt-6 px-5 py-8 md:py-24 xl:py-40 shadow-2xl">
      <div class="flex items-center justify-center mb-6">
        <img alt="icon" class="h-20 w-20 border-2 border-gray-300" :src="currentCategory.icon">
      </div>
      <h1 class="font-bold text-xl md:text-2xl xl:text-4xl text-white text-center" v-text="currentCategory.name" />
      <p class="mt-6 text-sm md:text-base tracking-widest text-white" v-text="currentCategory.description" />
    </div>
    <div class="flex items-center justify-center p-3 mt-8 md:-mt-16 xl:-mt-20">
      <div class="max-w-7xl w-full">
        <div class="grid grid-cols-6 gap-8 md:gap-12 md:gap-y-32">
          <div class="col-span-6 md:col-span-2 text-center">
            <localized-link :to="{ name: 'ChallengingFriend' }">
              <div
                class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-blue-400 hover:bg-blue-500 hover:shadow-lg cursor-pointer"
              >
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.mode-selection.challenge-friend')"
                />
              </div>
            </localized-link>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <div
              class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg cursor-pointer"
            >
              <div class="font-bold text-gray-200 md:text-xl uppercase"
                   v-text="$t('pages.game.mode-selection.random-opponent')"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <div
              class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-purple-500 hover:bg-purple-600 hover:shadow-lg cursor-pointer"
            >
              <div class="font-bold text-gray-200 md:text-xl uppercase"
                   v-text="$t('pages.game.mode-selection.play-alone')"
              />
            </div>
          </div>
          <div class="col-span-6 md:col-start-3 md:col-end-5 text-center">
            <div
              class="py-4 rounded overflow-hidden shadow-lg hover:bg-white transition bg-gray-400 hover:bg-gray-500 hover:shadow-lg cursor-pointer"
              @click="isModalVisible=true"
            >
              <div class="font-bold text-gray-200 md:text-xl uppercase"
                   v-text="$t('pages.game.mode-selection.suggestions.tittle')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer class="-mt-10" />
  <Suggestion v-show="isModalVisible"
              @close="isModalVisible=false"
  />
</template>
<script>
import Footer from "@/components/Game/Footer"
import Suggestion from "@/components/Game/Modals/Suggestion"
import {mapGetters} from 'vuex'

export default {
  name: "ModeSelection",

  data() {
    return {
      isModalVisible: false,
    }
  },

  components: {
    Footer,
    Suggestion
  },

  computed: {
    ...mapGetters(['currentCategory']),
  },

  methods: {
    discardCategories() {
      this.$store.dispatch("DISCARD_CATEGORIES")
        .then(() => {
          this.$router.push({name: 'User'})
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
}
</script>