<template>
  <div class="min-h-screen bg-gray-200">
    <div class="flex justify-center bg-green-800">
      <div class="w-full max-w-7xl">
        <button type="button"
                class="flex text-gray-200 dark:text-gray-300 focus:outline-none p-3 xl:px-0"
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
    <div class="bg-green-800 w-full text-center -mt-6 py-14 md:py-32 xl:py-44 shadow-2xl">
      <h1 class="font-bold text-3xl md:text-4xl xl:text-5xl text-white text-center" v-text="category.tittle" />
      <p class="mt-6 text-sm md:text-base tracking-widest text-white" v-text="category.description" />
    </div>
    <div class="flex items-center justify-center p-3 mt-8 md:-mt-16 xl:-mt-20">
      <div class="max-w-7xl w-full">
        <div class="grid grid-cols-6 gap-8 md:gap-12">
          <div class="col-span-6 md:col-span-2 text-center">
            <div
              class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-blue-400 hover:bg-blue-500 hover:shadow-lg cursor-pointer"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.mode-selection.challenge-friend')"
                />
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <div
              class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg cursor-pointer"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.mode-selection.random-opponent')"
                />
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2 text-center">
            <div
              class="py-4 md:py-16 rounded overflow-hidden shadow-lg hover:bg-white transition bg-purple-500 hover:bg-purple-600 hover:shadow-lg cursor-pointer"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.mode-selection.play-alone')"
                />
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

export default {
  name: "ModeSelection",

  components: {
    Footer
  },

  data() {
    return {
      category: {
        tittle: "Nazwa kategorii",
        description: "Opis kategorii ...."
      }
    }
  }
}
</script>