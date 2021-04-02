<template>
  <footer class="bg-gradient-to-r from-green-800 to-green-500 pt-10 mt-5 pt-10">
    <div class="max-w-6xl m-auto flex flex-wrap justify-left">
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs font-bold uppercase text-gray-300 font-medium mb-6">
          {{ $t('pages.home.footer.community.tittle') }}
        </div>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.community.github') }}
        </a>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.community.facebook') }}
        </a>
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs font-bold uppercase text-gray-300 font-medium mb-6">
          {{ $t('pages.home.footer.technologies.tittle') }}
        </div>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.technologies.v3') }}
        </a>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.technologies.tailwindcss') }}
        </a>
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs font-bold uppercase text-gray-300 font-medium mb-6">
          {{ $t('pages.home.footer.tools.tittle') }}
        </div>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.tools.docker') }}
        </a>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.tools.eslint') }}
        </a>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.tools.github') }}
        </a>
      </div>
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div class="text-xs font-bold uppercase text-gray-300 font-medium mb-6">
          {{ $t('pages.home.footer.links.tittle') }}
        </div>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.links.mobile') }}
        </a>
        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          {{ $t('pages.home.footer.links.pc') }}
        </a>
      </div>
    </div>
    <div class="pt-2 max-w-7xl mx-auto px-4 sm:px-6">
      <div class="pb-5 pt-5 border-t-2 border-gray-300">
        <div class="mt-2 font-bold text-gray-300 text-center text-sm">
          © Copyright {{ $t('name') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
