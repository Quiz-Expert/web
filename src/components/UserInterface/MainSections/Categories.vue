<template>
  <main class="flex items-center justify-center py-12 bg-gray-200">
    <div class="max-w-6xl w-full space-y-6">
      <div>
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.user.select-categories.tittle')"
        />
      </div>
      <div class="grid grid-cols-8 px-10">
        <section v-for="category in categories" :key="category" class="col-span-4 md:col-span-2 text-center">
          <div class="rounded-lg shadow-lg p-4 m-4 bg-yellow-600 hover:bg-yellow-700 hover:shadow-lg ">
            <h3 class="text-lg text-gray-200 tracking-wide" v-text="category.name" />
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
        {
          name:"Kategoria - 1"
        },
        {
          name:"Kategoria - 2"
        },
        {
          name:"Kategoria - 3"
        },
        {
          name:"Kategoria - 4"
        },
      ]
    }
  }
}
</script>