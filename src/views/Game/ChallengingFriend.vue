<template>
  <div class="min-h-screen bg-gray-200 pb-16">
    <div class="flex justify-center bg-green-700">
      <div class="w-full max-w-7xl">
        <button type="button"
                class="flex text-gray-200 dark:text-gray-300 focus:outline-none p-3 xl:px-0"
        >
          <localized-link :to="{ name: 'GameModeSelection' }">
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
          </localized-link>
        </button>
      </div>
    </div>
    <div class="bg-green-700 w-full text-center -mt-6 px-5 py-8 md:py-14 xl:py-20 shadow-2xl">
      <div class="flex items-center justify-center mb-6">
        <img alt="icon" class="h-20 w-20 border-2 border-gray-300" :src="currentCategory.icon">
      </div>
      <h1 class="font-bold text-xl md:text-2xl xl:text-4xl text-white text-center" v-text="currentCategory.name" />
      <p class="mt-6 text-sm md:text-base tracking-widest text-white" v-text="currentCategory.description" />
    </div>
    <div class="flex items-center justify-center p-3 mt-8 mb-20">
      <div class="max-w-xl w-full">
        <div class="bg-white shadow-lg rounded-lg px-3 py-2 mb-4">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 flex items-center pl-2">
              <button type="submit"
                      class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg fill="none"
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     viewBox="0 0 24 24"
                     class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </span>
            <input type="search"
                   name="q"
                   class="py-2 text-sm text-gray-500 bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full focus:ring-offset-yellow-500"
                   :placeholder="$t('pages.user.inviting-to-friends.search')"
                   autocomplete="off"
            >
          </div>
          <div v-for="friend in friends" :key="friend" class="my-1 text-sm">
            <div class="flex justify-between items-center cursor-pointer text-gray-700 rounded-md hover:bg-gray-100 px-2 py-2">
              <div>
                <p class="text-sm font-medium text-gray-900" v-text="friend.name" />
              </div>
              <div>
                <button type="button"
                        class="inline-block p-1 sm:p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer class="-mt-10" />
</template>
<script>
import Footer from "@/components/Game/Footer"
import {mapGetters} from 'vuex'

export default {
  name: "ChallengingFriend",

  data() {
    return {
      friends: [
        {
          name: "Jane Cooper",
        },
        {
          name: "Jane ",
        }
      ]
    }
  },

  components: {
    Footer
  },

  computed: {
    ...mapGetters(['currentCategory']),
  },
}
</script>