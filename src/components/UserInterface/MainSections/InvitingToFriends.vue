<template>
  <main class="w-full py-12">
    <div class="max-w-md mx-auto space-y-6 ">
      <div class="flex justify-center">
        <h2 class="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl leading-tight text-gray-900 text-center"
            v-text="$t('pages.user.inviting-to-friends.tittle')"
        />
      </div>
      <div class="flex justify-center px-4 sm:px-6 lg:px-8">
        <div class="w-full">
          <div class="bg-white shadow-lg rounded-lg px-3 py-2 mb-4">
            <div class="relative text-gray-600 focus-within:text-gray-400 ">
              <input v-model="searchData"
                     minlength="3"
                     type="search"
                     class="py-2 text-sm text-gray-500 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 w-full focus:ring-offset-yellow-500"
                     :placeholder="$t('pages.user.inviting-to-friends.search')"
                     autocomplete="off"
                     @keydown.enter="isOpen = false"
                     @keydown.esc="isOpen = false"
                     @input="debouncedOnChange"
              >
            </div>
            <div v-for="user in usersData" :key="user" class="my-1 text-sm">
              <div
                class="flex justify-between items-center cursor-pointer text-gray-700 rounded-md hover:bg-gray-100 px-2 py-2"
              >
                <div>
                  <p class="text-sm font-medium text-gray-900" v-text="user.name" />
                </div>
                <div>
                  <button type="button"
                          class="inline-block p-1 sm:p-2 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                          @click="inviteUser(user)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="w-4 sm:w-5 h-4 sm:h-5"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                    >
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import {mapGetters} from 'vuex'
import _debounce from 'lodash.debounce';

export default {
  name: "InvitingToFriends",

  methods: {
    inviteUser(user) {
      this.$store.dispatch("INVITE_FRIEND", user.id).then(() => {
        this.$store.dispatch("FRIEND_LIST_INVITATION", this.$t('pages.user.inviting-to-friends.message', {user: user.name}));
      });
    },

    onChange() {
      if (this.searchData.length >= 3) {
        this.$store.dispatch("SEARCH_USER", this.searchData).then(() => {
          this.usersData = this.searchUser || [];
        });
      } else {
        this.usersData = [];
      }
    }
  },

  data() {
    return {
      usersData: [],
      searchData: ''
    }
  },

  computed: {
    ...mapGetters(['searchUser']),
    debouncedOnChange() {
      return _debounce(this.onChange, 400);
    }
  },

  unmounted() {
    this.$store.dispatch("DISCARD_SEARCH_USER", this.searchData);
  }
}
</script>