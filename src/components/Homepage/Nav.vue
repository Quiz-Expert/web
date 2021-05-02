<template>
  <nav class="fixed w-full z-30 top-0 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <localized-link :to="{ name :'Homepage' }" class="no-underline hover:no-underline text-2xl lg:text-4xl">
            <span class="sr-only text-gray-900" v-text="$t('name')" />
            {{ $t('name') }}
          </localized-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  @click="isOpen = !isOpen"
          >
            <span class="sr-only" v-text="$t('pages.home.navigation.open')" />
            <svg class="h-6 w-6"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 aria-hidden="true"
            >
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <localized-link :to="{ name :'Login' }">
            <button type="button"
                    class="focus:outline-none text-yellow-600 py-3 px-6 rounded-md hover:text-yellow-800"
                    v-text="$t('pages.home.navigation.sign-in')"
            />
          </localized-link>
          <localized-link :to="{ name :'Register' }">
            <button type="button"
                    class="focus:outline-none text-white py-3 px-6 rounded-md bg-green-600 hover:bg-green-700 hover:shadow-lg"
                    v-text="$t('pages.home.navigation.sign-up')"
            />
          </localized-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="duration-100 ease-in"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" class="absolute top-0 inset-x-0 p-2 transition transform md:hidden ">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 border-t-4 border-yellow-500">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <img class="h-8 w-auto" src="@/assets/images/logo/icon.png">
              <p class="text-center text-base font-medium text-gray-500" v-text="$t('name')" />
              <div class="-mr-2 items-end">
                <button type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        @click="isOpen = !isOpen"
                >
                  <span class="sr-only" v-text="$t('pages.home.navigation.close')" />
                  <svg class="h-6 w-6"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       aria-hidden="true"
                  >
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <localized-link :to="{ name :'Login' }">
                <button type="button"
                        class="w-full focus:outline-none text-white py-3 px-6 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
                        v-text="$t('pages.home.navigation.sign-in')"
                />
              </localized-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                {{ $t('pages.home.navigation.question') }}
                <localized-link :to="{ name :'Register' }"
                                class="text-yellow-600 hover:text-yellow-800"
                                v-text="$t('pages.home.navigation.sign-up')"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    isOpen: false,
  })
};
</script>