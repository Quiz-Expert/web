<template>
  <nav class="bg-green-700 top-0 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20 lg:h-24">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="@/assets/images/logo/icon.png" :alt="$t('name')">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <localized-link
                :to="{ name: 'Categories' }"
                class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-text="$t('pages.user.navigation.categories')"
              />
              <localized-link
                :to="{ name: 'Invitations' }"
                class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-text="$t('pages.user.navigation.invitations')"
              />
              <localized-link
                :to="{ name: 'Friends' }"
                class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-text="$t('pages.user.navigation.friends')"
              />
              <localized-link
                :to="{ name: 'Profile' }"
                class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-text="$t('pages.user.navigation.profile')"
              />
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
            >
              <span class="sr-only" v-text="$t('pages.user.navigation.notifications')" />
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div class="ml-3 relative">
              <div>
                <button
                  id="user-menu"
                  type="button"
                  class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="isOpenProfile = !isOpenProfile"
                  @focusout="isOpenProfile = false"
                >
                  <span class="sr-only" v-text="$t('pages.user.navigation.open-user-menu')" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
              </div>

              <transition
                enter-active-class="duration-100 ease-out"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="duration-75 ease-in"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-show="isOpenProfile"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg border-t-2 border-b-2 border-yellow-500 py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <localized-link
                    :to="{ name: 'Settings' }"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    v-text="$t('pages.user.navigation.settings')"
                  />
                  <button
                    type="button"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    @click="logout"
                    v-text="$t('pages.user.navigation.sing-out')"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="flex md:hidden">
          <button
            type="button"
            class="bg-gray-800 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="isOpenMenu = !isOpenMenu"
            @focusout="isOpenMenu = false"
          >
            <span class="sr-only" v-text="$t('pages.user.navigation.open-user-menu')" />
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpenMenu" id="mobile-menu" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <localized-link
            :to="{ name: 'Categories' }"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            v-text="$t('pages.user.navigation.categories')"
          />
          <localized-link
            :to="{ name: 'Invitations' }"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            v-text="$t('pages.user.navigation.invitations')"
          />
          <localized-link
            :to="{ name: 'Friends' }"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            v-text="$t('pages.user.navigation.friends')"
          />
          <localized-link
            :to="{ name: 'Profile' }"
            class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            v-text="$t('pages.user.navigation.profile')"
          />
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-4 sm:px-6 lg:px-8">
            <div class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
            </div>
            <button
              type="button"
              class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
            >
              <span class="sr-only">{{ $t('pages.user.navigation.notifications') }}</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <localized-link
              :to="{ name: 'Settings' }"
              class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              v-text="$t('pages.user.navigation.settings')"
            />
            <button
              type="button"
              class="nav-link w-full block px-3 py-2 rounded-md text-base text-left font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              @click="logout"
              v-text="$t('pages.user.navigation.sing-out')"
            />
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Nav",
  data: () => ({
    isOpenProfile: false,
    isOpenMenu: false,
  }),

  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    logout() {
      this.$store.dispatch("LOGOUT").then(() => {
        this.$router.push({name: 'Homepage'});
      });
    }
  }
}
</script>

<style>
  nav .nav-link.router-link-active {
    --tw-bg-opacity: 1;
    background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
  }
</style>
