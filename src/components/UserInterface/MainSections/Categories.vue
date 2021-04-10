<template>
  <main class="flex items-center justify-center py-12 bg-gray-100">
    <div class="max-w-6xl w-full space-y-6">
      <div>
        <h2 class="mb-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center">
          {{ $t('pages.user.select-categories.tittle') }}
        </h2>
      </div>
      <div class="grid grid-cols-8 px-10">
        <section v-for="category in categories" :key="category" class="col-span-4 md:col-span-2 text-center">
          <div class="rounded-lg shadow-lg p-4 m-4 bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg ">
            <h3 class="text-lg text-gray-200 tracking-wide" v-text="category" />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        "Kategoria - 1",
        "Kategoria - 2",
        "Kategoria - 3",
        "Kategoria - 4",
      ]
    }
  }
}
</script>