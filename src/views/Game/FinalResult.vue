<template>
  <div class="min-h-screen bg-gray-200">
    <div class="flex justify-center bg-green-700">
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
    <div class="bg-green-700 w-full text-center -mt-6 py-14 md:py-32 xl:py-44 shadow-2xl">
      <h1 class="font-bold text-3xl md:text-4xl xl:text-5xl text-white text-center">
        {{ $t('pages.game.final-result.tittle') }} {{ result }}/6
      </h1>
      <p class="mt-6 text-sm md:text-base tracking-widest text-white" v-text="category.tittle" />
    </div>
    <div class="flex items-center justify-center p-3 mt-8">
      <div class="max-w-3xl w-full">
        <div class="grid grid-cols-6 gap-8 md:gap-12">
          <div class="col-span-6 text-center">
            <div
              class="py-4 rounded overflow-hidden shadow-lg transition bg-purple-500 hover:bg-purple-600 hover:shadow-lg cursor-pointer"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.final-result.play-again')"
                />
              </div>
            </div>
          </div>
          <div class="col-span-6 text-center">
            <div
              class="py-4 rounded overflow-hidden shadow-lg transition bg-gray-500 hover:bg-gray-600 hover:shadow-lg cursor-pointer"
              @click="isModalVisible=true"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="$t('pages.game.final-result.report-mistake.tittle')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ReportMistake v-show="isModalVisible"
                 @close="isModalVisible=false"
  />
  <Footer class="-mt-10" />
</template>
<script>
import Footer from "@/components/Game/Footer"
import ReportMistake from "@/components/Game/Modals/ReportMistake"

export default {
  name: "FinalResult",

  components: {
    Footer,
    ReportMistake
  },

  data() {
    return {
      isModalVisible: false,

      category: {
        tittle: "Nazwa kategorii",
        description: "Opis kategorii ...."
      },

      result: 5,
    }
  }
}
</script>