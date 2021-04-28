<template>
  <div class="h-screen w-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex items-center text-gray-700 max-w-md">
      <div class="space-y-4">
        <div class="text-5xl font-dark font-bold">404</div>
        <p class="text-2xl md:text-3xl font-light leading-normal" v-text="$t('pages.not-found.tittle')" />
        <p class="mb-8" v-text="$t('pages.not-found.descriptions')" />
        <div>
          <localized-link :to="{ name :'Homepage' }">
            <button type="button"
                    class="focus:outline-none text-white py-2 px-6 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
                    v-text="$t('pages.not-found.back-to-homepage')"
            />
          </localized-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound"
}
</script>