<template>
  <footer class="bg-green-700 pt-10 mt-5 pt-10">
    <div class="max-w-6xl m-auto flex flex-wrap justify-left">
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <p class="text-xs font-bold uppercase text-gray-300 font-medium mb-6"
           v-text="$t('pages.home.footer.community.tittle')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.community.github')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.community.facebook')"
        />
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <p class="text-xs font-bold uppercase text-gray-300 font-medium mb-6"
           v-text="$t('pages.home.footer.technologies.tittle')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.technologies.v3')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.technologies.tailwindcss')"
        />
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs font-bold uppercase text-gray-300 font-medium mb-6"
             v-text="$t('pages.home.footer.tools.tittle')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.tools.docker')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.tools.eslint')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.tools.github')"
        />
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <p class="text-xs font-bold uppercase text-gray-300 font-medium mb-6"
           v-text="$t('pages.home.footer.links.tittle')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.links.mobile')"
        />
        <a href="#"
           class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
           v-text="$t('pages.home.footer.links.pc')"
        />
      </div>
    </div>
    <div class="pt-2 max-w-7xl mx-auto px-4 sm:px-6">
      <div class="pb-5 pt-5 border-t-2 border-gray-300">
        <p class="mt-2 font-bold text-gray-300 text-center text-sm">
          © Copyright {{ $t('name') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
