<template>
  <div class="flex h-screen bg-gray-200">
    <div :class="isOpenMenu ? 'block' : 'hidden'"
         class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
         @click="isOpenMenu = false"
    />

    <div :class="isOpenMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
         class="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-green-700 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 "
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="text-gray-300 text-2xl font-semibold text-center"
                v-text="$t('pages.dashboard.navigation.tittle')"
          />
        </div>
      </div>

      <nav class="flex flex-col mt-10 px-4 text-center" @click="isOpenMenu = false">
        <localized-link
          :to="{ name: 'Overview' }"
          class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block mt-3 px-3 py-2 rounded-md text-base font-medium"
          v-text="$t('pages.dashboard.navigation.overview')"
        />
        <localized-link
          :to="{ name: 'Categories-panel' }"
          class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block mt-3 px-3 py-2 rounded-md text-base font-medium"
          v-text="$t('pages.dashboard.navigation.categories')"
        />
        <localized-link
          :to="{ name: 'Questions-panel' }"
          class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block mt-3 px-3 py-2 rounded-md text-base font-medium"
          v-text="$t('pages.dashboard.navigation.questions')"
        />
        <localized-link
          :to="{ name: 'Suggestions-panel' }"
          class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block mt-3 px-3 py-2 rounded-md text-base font-medium"
          v-text="$t('pages.dashboard.navigation.suggestions')"
        />
        <localized-link
          :to="{ name: 'Users-panel' }"
          class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block mt-3 px-3 py-2 rounded-md text-base font-medium"
          v-text="$t('pages.dashboard.navigation.users')"
        />
      </nav>
    </div>

    <div class="flex-1 flex flex-col">
      <header class="flex justify-between items-center p-6">
        <div class="flex items-center space-x-4 lg:space-x-0">
          <button type="button"
                  class="text-gray-500  focus:outline-none lg:hidden"
                  @click="isOpenMenu = true"
          >
            <svg class="h-6 w-6"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <SmallNav />
      </header>
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script>
import SmallNav from "@/components/Dashboard/SmallNav"
import Footer from "@/components/Dashboard/Footer"

export default {
  name: "Dashboard",

  data: () => ({
    isOpenMenu: false,
  }),

  components:{
    SmallNav,
    Footer
  }
}
</script>
<style>
nav .nav-link.router-link-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}
</style>