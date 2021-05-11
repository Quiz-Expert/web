<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="w-full max-w-7xl p-4 -mt-10">
      <div class="mb-4 sm:mb-8 md:mb-10">
        <div class="bg-green-700 w-full text-center py-14 sm:py-24 md:py-36 xl:py-44 shadow-2xl rounded md:rounded-xl">
          <h1 class="font-bold text-3xl md:text-4xl xl:text-5xl text-white text-center" v-text="question.description" />
        </div>
        <TimerBar :width="getWidth()" class="mt-4 sm:mt-8 md:mt-10" />
      </div>
      <div>
        <div class="grid grid-cols-4 gap-4 md:gap-8">
          <section v-for="answer in question.answers" :key="answer" class="col-span-4 md:col-span-2 text-center">
            <div
              class="py-4 md:py-14 rounded md:rounded-xl overflow-hidden shadow-lg hover:bg-white transition bg-gray-400 hover:bg-gray-500 hover:shadow-lg cursor-pointer"
            >
              <div>
                <div class="font-bold text-gray-200 md:text-xl uppercase"
                     v-text="answer"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <Footer class="-mt-10" />
</template>

<script>
import Footer from "@/components/Game/Footer"
import TimerBar from "@/components/Game/TimerBar"

export default {
  name: "GameMode",

  components: {
    Footer,
    TimerBar
  },

  methods: {
    getWidth() {
      return this.time/100;
    }
  },

  data() {
    return {
      time: 0,

      question: {
        description: "Treść pytania ..........",

        answers: [
          "Odpowiedzi - 1",
          "Odpowiedzi - 2",
          "Odpowiedzi - 3",
          "Odpowiedzi - 4"
        ],
      }
    }
  },

  created() {
    setInterval(() => {
      if(this.time<10000){
        this.time += 10;
      }
    }, 10);
  }
}
</script>